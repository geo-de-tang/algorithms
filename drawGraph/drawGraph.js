import { drawCircle } from "./drawCircle.js";

const div = document.createElement("body");
const canvas = document.createElement("canvas");

canvas.style = "width: 100%; height: 100%; background: blue; margin: 20px;";

drawCircle();       

div.appendChild(canvas);


document.body = div;
