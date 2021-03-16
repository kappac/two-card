const Colors = [
    'diamond', 'heart', 'club', 'spade',
];

const Names = [
    '2', '3', '4', '5', '6', '7', '8',
    '9', '10', 'J', 'Q', 'K', 'A',
];

export const Deck = Colors.flatMap(
    (color) => Names.map((name) => {
        const fullName = `${color}_${name}`;
        const image = `http://h3h.net/images/cards/${fullName}.svg`;

        return { color, name, fullName, image };
    }),
);
