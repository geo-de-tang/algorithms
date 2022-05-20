import { addCircle } from "./addSvg/addCircle.js";

const svg =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');

svg.style = "width:100%; height:100%; background: blue;";

addCircle(svg)

document.body.appendChild(svg);