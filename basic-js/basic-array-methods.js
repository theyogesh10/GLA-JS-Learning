 var days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

days.sort(); // Sorts the array in alphabetical order  
days.reverse(); // Reverses the sorted array 

console.log(days);

console.log( days.indexOf( 'Monday' ) );        // 3
console.log( days.indexOf( 'Saturday' ) );      // -1


var numbers = [ 20, 60, 40, 65, 80, 8, 22, 30, 200, 2, 3500 ];
numbers.sort( function ( x, y ){
    return x - y;
});
console.log( numbers );  


var projects = [
    {hours: 20, name: 'Project 1'},
    {hours: 60, name: 'Project 2'},
    {hours: 40, name: 'Project 3'},
    {hours: 65, name: 'Project 4'},
    {hours: 80, name: 'Project 5'},
];
projects.sort(function( x, y ){
    return x.hours-y.hours
});
console.log( projects );


days.push( 'Saturday' );             // push() method
days.push( 'Sunday' );
days.sort();
console.log(days);

days.pop(); 
var removeDay = days.pop();          // pop() method
console.log(days);
console.log(removeDay);


days.unshift( 'Holiday' );           // unshift() method adds an element to the beginning of an array and shifts other elements to higher indexes
console.log ( days );

days.shift();                       // shift() method removes an element from the array's beginning 
removeDay = days.shift();
console.log(days);
console.log(removeDay);

days.push( 'Friday', 'Tuesday', 'Wednesday');
console.log(days);

days.splice( 2, 3, 'Jan', 'Feb', 'Mar')  ;        //add and remove item between the array     
console.log(days);


var slicedDay = days.slice( 0, 4 )   // slice() method returns a portion of an array into a new  array object
console.log(days);
console.log(slicedDay);

