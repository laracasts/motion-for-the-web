const square = document.querySelector(".square") as HTMLDivElement;

let rotation = 0;
const MAX_ROTATION = 360;

function rotateSquare() {
    rotation++;
    square.style.transform = `rotate(${rotation}deg)`;

    if (rotation < MAX_ROTATION) {
        requestAnimationFrame(rotateSquare);
    }
}

rotateSquare();

// const intervalId = setInterval(() => {
//     rotation++;
//     square.style.transform = `rotate(${rotation}deg)`;

//     if (rotation >= MAX_ROTATION) clearInterval(intervalId);
// }, 1000 / 10); // 16.66666
