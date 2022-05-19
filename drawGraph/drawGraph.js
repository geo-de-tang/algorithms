import { drawCircle } from "./drawCircle.js";

const canvas = document.createElement("canvas");

canvas.style = "width: 100%; height: 100%; background: blue; margin: 20px;";

drawCircle(canvas);

document.body.appendChild(canvas);
