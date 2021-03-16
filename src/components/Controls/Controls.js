import React, { useCallback } from 'react';

export const Controls = ({
    handsQuantity,
    onDeal,
    onHandsChange = () => {},
}) => {
    const onStepChange = useCallback(
        ({ target: { value } }) => onHandsChange(+value),
        [onHandsChange],
    );

    return (
        <div className="controls">
            <h4>Hands:</h4>
            <input
                type="range"
                min="2"
                max="4"
                step="1"
                value={handsQuantity}
                onChange={onStepChange}
            />
            <h4>Deal Button:</h4>
            <button className="play-button" onClick={onDeal}>
                Deal Cards
            </button>
        </div>
    );
};
