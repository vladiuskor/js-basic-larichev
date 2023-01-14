/*
    Exercise 1
    Перетворити користувача у такий вигляд {fullName: "Vlad Korobko", skillNum: 2}
 */

const users = [
    {
        name: 'Vlad',
        surname: 'Korobko',
        age: 27,
        skills: ['Development', 'DevOps']
    },
    {
        name: 'Roman',
        surname: 'Korobko',
        age: 15,
        skills: ['PM', 'Scrum']
    }
];

console.table(users.map(elem => {
    return {
        fullName: `${elem.name} ${elem.surname}`,
        skillNum: `${elem.skills.length}`
    }
}));