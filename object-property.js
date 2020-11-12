const students = [
    {id:34, name: "Ayon"},
    {id:31, name: "Himel"},
    {id:30, name: "Haba bappy"},
    {id:34, name: "Abir"},
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id > 31);
const biggerOne = students.find( s => s.id > 31);
console.log(biggerOne);