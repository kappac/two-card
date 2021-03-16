import { useEffect, useState } from 'react';

import { useDeck } from '../useDeck';

const checkPairs = (cards) => {
    const groups = cards.reduce(
        (acc, { name, fullName }) => {
            const existing = acc[name] || [];
            return {
                ...acc,
                [name]: [ ...existing, fullName ],
            };
        },
        {},
    );

    return Object.keys(groups).reduce(
        (acc, name) => {
            const group = groups[name];
            const pairs = Math.floor(group.length / 2);

            if (!pairs) {
                return acc;
            }

            const newAcc = [...acc];

            for (let i = 0; i < pairs; i++) {
                const pair = group.splice(0, 2);

                if (pair.length) {
                    newAcc.push(pair);
                }
            }

            return newAcc;
        },
        [],
    );
};

export const useGame = (handsQuantity, cardsPerHand) => {
    const { hands: deckHands, shuffle } = useDeck(handsQuantity, cardsPerHand);
    const [hands, setHands] = useState([]);
    const [winner, setWinner] = useState('');

    useEffect(
        () => {
            const hands = Object.keys(deckHands).map(
                (hand) => {
                    const cards = deckHands[hand];
                    const pairs = checkPairs(cards);
                    return { hand, cards, pairs };
                },
            );

            const [first] = hands.sort(({ pairs: fPairs }, { pairs: sPairs }) => {
                if (fPairs.length < sPairs.length) {
                    return 1;
                }

                if (fPairs.length > sPairs.length) {
                    return -1;
                }

                return 0;
            })

            setHands(hands);
            setWinner(first?.hand);
        },
        [deckHands],
    );

    return { hands, winner, next: shuffle };
};
