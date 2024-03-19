var days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];
console.log(days);

console.log(days[2]);

days[2] = 'Wed'; //change item in a array
console.log(days);

days[5] = 'Saturday';  //add new element to the end of an array
console.log(days);

days[10] =  'A day in Mars';   
console.log(days);

console.log(days[8]); //undefined
console.log(days[11]); //undefined


console.log(days.length);   //11


var dummyArray = [
    'hello',
    1,
    true,
    null
];
console.log(dummyArray);

//2d array
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 10, 11, 12]
];
console.log(matrix);
console.log(matrix[1][2]);  //6
console.log(matrix[2][4]);   //11
console.log(matrix[2][5]);   //12 