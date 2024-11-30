const xhr = new XMLHttpRequest();

// AJAX ( Asynchronous JavaScript and XML )
xhr.onload = function() {
    console.log( xhr.responseText );
};

xhr.open( 'GET', 'https://jsonplaceholder.typicode.com/todos/1' );

xhr.send();