import { drawCircle } from "./addSvg/addCircle.js";

const canvas = document.createElement("canvas");

canvas.style = "width: 100%; height: 100%;";

drawCircle(canvas);

document.body.appendChild(canvas);
