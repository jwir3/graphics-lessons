// Retrieve the canvas element (we know the DOM is already
// loaded because the script is imported at the bottom of the HTML)
let canvas = document.getElementById('canvas1');

// Retrieve the context from the canvas element
let context = canvas.getContext('2d');

// Let's view the context object and see what kind of data it
// encapsulates.
console.log(context);

// Fill a square of 150 pixels starting at 0, 0.
context.fillStyle = 'rgb(0, 0, 0)';
context.fillRect(0, 0, 150, 150);