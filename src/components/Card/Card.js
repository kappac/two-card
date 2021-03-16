import React from 'react';
import cx from 'classnames';

import './Card.scss';

export const Card = ({ className, name, image }) => (
    <img
        className={cx('card', className)}
        src={image}
        alt={name}
    />
);
