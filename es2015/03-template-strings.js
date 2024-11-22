const name = 'John', message = 'Good morning';
// const greeting = message + ' ' + name + '!';
const greeting = `${message} ${name}!`;
console.log( greeting );

const john = {
    name: 'John',
    email: 'john@gmail.com',
    age: 30
};

// const strTr = '<tr>' +
//     '<td>' + john.name + '</td>' +
//     '<td>' + john.email + '</td>' +
//     '<td>' + john.age + '</td>' +
// '</tr>';
// console.log( strTr );

const strTr = `
    <tr>
        <td>${john.name}</td>
        <td>${john.email}</td>
        <td>${john.age}</td>
    </tr>
`;
console.log( strTr );