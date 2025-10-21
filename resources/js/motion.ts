// @ts-nocheck
import { animate, hover } from "motion";

// WAAPI
// const square1 = document.querySelector(".square--1") as HTMLElement;

// square1.animate(
//     {
//         transform: "translateX(100px)",
//     },
//     {
//         duration: 800,
//         fill: "forwards",
//         easing: "ease-out",
//     }
// );

// Motion.dev
const square2 = document.querySelector(".square--2") as HTMLElement;

const sequence = [
    [square2, { x: 200 }, { type: "spring", stiffness: 1000, damping: 25 }],
    [
        square2,
        { x: 100, y: 100 },
        { type: "spring", stiffness: 1000, damping: 25 },
    ],
    [
        square2,
        { x: 300, y: 0 },
        { type: "spring", stiffness: 1000, damping: 25 },
    ],
];

const animation = animate(sequence, {
    duration: 3,
    repeat: Infinity,
    repeatType: "mirror",
});

hover(".wrapper", () => {
    animation.pause();
    animate(square2, { scale: 1.5, rotate: 45 });

    return () => {
        animation.play();
        animate(square2, { scale: 1, rotate: 0 });
    };
});
