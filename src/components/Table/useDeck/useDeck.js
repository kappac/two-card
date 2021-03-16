import { useCallback, useEffect, useState } from 'react';
import { Deck } from './constants';

const newDeck = (d = Deck) => Array.prototype.concat(d);

const generateHandName = (idx) => `hand_${idx}`;

const generateHands = (quantity) => {
    const hands = {};

    for (let i = 0; i < quantity; i++) {
        const handName = generateHandName(i);
        hands[handName] = [];
    }

    return hands;
};

export const useDeck = (handsQuantity = 2, cardsPerHand = 7) => {
    const [deck, setDeck] = useState(newDeck());
    const [hands, setHands] = useState({});
    const shuffle = useCallback(
        () => setDeck(newDeck()),
        [setDeck],
    );
    
    useEffect(
        () => setHands(
            generateHands(handsQuantity),
        ),
        [handsQuantity],
    );

    useEffect(
        () => {
            const deckCopy = newDeck(deck);

            for (let i = 0; i < handsQuantity; i++) {
                const handName = generateHandName(i);

                setHands((prev) => {
                    const cards = [];

                    for (let c = 0; c < cardsPerHand; c++) {
                        const idx = Math.floor(Math.random() * deckCopy.length);
                        const [nextCard] = deckCopy.splice(idx, 1);
                        cards.push(nextCard);
                    }

                    return {
                        ...prev,
                        [handName]: cards,
                    };
                });
            }
        },
        [deck, cardsPerHand, handsQuantity, setHands],
    );

    return { hands, shuffle };
};
