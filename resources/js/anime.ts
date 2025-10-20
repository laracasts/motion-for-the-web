import { animate, utils, createDraggable, spring } from "animejs";

const [$square] = utils.$(".square");
const [$button] = utils.$("button");
let rotations = 0;

// Make the square draggable around its center
createDraggable(".square", {
    container: document.body,
    modifier: (value) => value,
    snap: 64,
    containerPadding: 64,
    releaseEase: spring({ stiffness: 2000, damping: 40 }),

    onRelease: () => {
        console.log("released");
        animate($square, {
            rotate: "+=90",
            ease: spring(),
            duration: 150,
        });
    },
});

// Animate logo rotation on click
const rotateLogo = () => {
    rotations++;
};

document.querySelector(".square")?.addEventListener("click", rotateLogo);
