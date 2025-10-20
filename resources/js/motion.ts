// @ts-nocheck
import { animate } from "motion";

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
animate(".square--2", { x: [0, 200, 100, 300] }, { duration: 2 });
