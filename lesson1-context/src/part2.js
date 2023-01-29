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
context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

// Cool, now let's draw a triangle centered in the middle of the
// canvas, 5px away from the end of the canvas.
let topPoint = [250, 5];
let bottomLeftPoint = [5, 495];
let bottomRightPoint = [495, 495];

// You have to specify the fill style each time you want a new
// color or style.
context.fillStyle = 'rgba(200, 0, 200, .8)';

// There's no way of specifying a "triangle" in Canvas2D. We have to use
// a generic "path" instead.
context.beginPath();
context.moveTo(topPoint[0], topPoint[1]);

// Typically, we specify our polygons in counter-clockwise format.
// This will become clear as to why when we get to 3D and the right-hand
// rule, but for now, consider it a convention.
context.lineTo(bottomLeftPoint[0], bottomLeftPoint[1]);
context.lineTo(bottomRightPoint[0], bottomRightPoint[1]);

// We could also have used closePath() here.
context.lineTo(topPoint[0], topPoint[1]);

// This ends the sub-path definition (started with beginPath()).
context.fill();
