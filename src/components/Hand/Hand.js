import React from 'react';
import cx from 'classnames';

import { Card } from '../Card';

import './Hand.scss';

const Colors = ['red', 'aquamarine', 'blue'];

const getBorder = (cardName, pairs) => {
    const idx = pairs.findIndex((pair) => pair.includes(cardName));
    return { border: idx >= 0, color: Colors[idx] };
};

export const Hand = ({ cards, pairs, winner }) => (
    <div
        className={cx(
            'hand',
            { winner },
        )}
    >
        {cards.map(({ image, fullName }) => {
            const { border, color } = getBorder(fullName, pairs);
            return (
                <Card
                    key={fullName}
                    className={cx({
                        border: border,
                        [color]: border && color,
                    })}
                    image={image}
                    name={fullName}
                />
            );
        })}
    </div>
);
