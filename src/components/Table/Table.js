import React, { useState } from 'react';

import { Controls } from '../Controls';
import { Hand } from '../Hand';

import { useGame } from './useGame';

import './Table.scss';

export const Table = () => {
    const [ handsQuantity, setHandsQuantity ] = useState(2);
    const { hands, winner, next } = useGame(handsQuantity);

    return (
        <div className="table">
            <div className="hands">
                {hands.map(({ hand, cards, pairs }) => (
                    <Hand
                        key={hand}
                        cards={cards}
                        pairs={pairs}
                        winner={winner === hand}
                    />
                ))}
            </div>
            <Controls
                handsQuantity={handsQuantity}
                onHandsChange={setHandsQuantity}
                onDeal={next}
            />
        </div>
    );
};
