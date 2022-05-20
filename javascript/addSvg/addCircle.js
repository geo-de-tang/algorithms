export function addCircle(svg) {


    const animation = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animation.setAttribute("attributeName", "r");
    animation.setAttribute("values", "0;10;0");
    animation.setAttribute("dur", "2.5s");
    animation.setAttribute("repeatCount", "indefinite");


    const arr = new Array(400).fill(0);

    arr.forEach((_, index) => {

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute("cx", 30 + 30 * (index % 20));
        circle.setAttribute("cy", 30 + 30 * Math.floor(index / 20));
        circle.setAttribute("r", 10);

        const tmpAnim = animation.cloneNode();

        animation.setAttribute("values", `0;${index % 20};0`);
        animation.setAttribute("dur", `${index % 20}s`);

        circle.appendChild(animation.cloneNode());
        svg.appendChild(circle);

    })
}