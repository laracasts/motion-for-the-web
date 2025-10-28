import { gsap } from "gsap";

const tl = gsap.timeline();

tl.to(".square", { x: 100, duration: 3 });
tl.to(".square", { scale: 0.5 });
tl.to(".square", { scale: 1, x: 200 });
