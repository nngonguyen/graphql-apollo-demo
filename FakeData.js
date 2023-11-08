const UserList = [
    {
        id: 1,
        name: "John",
        username: 'john',
        age: 20,
        nationality: "CANADA",
        friends: [
            {
                id: 2,
                name: "Pedro",
                username: 'PedroTech',
                age: 20,
                nationality: "BRAZIL",
            },
            {
                id: 5,
                name: "Kelly",
                username: 'kelly2019',
                age: 5,
                nationality: "CHILE",
            },
        ]
    },
    {
        id: 2,
        name: "Pedro",
        username: 'PedroTech',
        age: 20,
        nationality: "BRAZIL",
    },
    {
        id: 3,
        name: "Sarah",
        username: 'cameron',
        age: 25,
        nationality: "INDIA",
        friends: [
            {
                id: 2,
                name: "Pedro",
                username: 'PedroTech',
                age: 20,
                nationality: "BRAZIL",
            },
        ]
    },
    {
        id: 4,
        name: "Rafe",
        username: 'rafe123',
        age: 60,
        nationality: "GERMANY",
    },
    {
        id: 5,
        name: "Kelly",
        username: 'kelly2019',
        age: 5,
        nationality: "CHILE",
    },
]
const MovieList = [
    {
        id: 1,
        movieName: "Avengers Endgame",
        yearOfPublication: 2019,
        isInTheaters: true,
    },
    {
        id: 2,
        movieName: "Interstellar",
        yearOfPublication: 2007,
        isInTheaters: true,
    },
    {
        id: 3,
        movieName: "Superbad",
        yearOfPublication: 2009,
        isInTheaters: true,
    },
    {
        id: 4,
        movieName: "The Movie",
        yearOfPublication: 2035,
        isInTheaters: false,
    },
];

module.exports = { UserList, MovieList }