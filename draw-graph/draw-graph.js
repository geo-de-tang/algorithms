const div = document.createElement("body");
const canvas = document.createElement("canvas");

canvas.width = 200;
canvas.height = 200;
canvas.style = "background: blue";

div.appendChild(canvas);

document.body = div;
