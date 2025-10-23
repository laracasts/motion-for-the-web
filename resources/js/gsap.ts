import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const tl = gsap.timeline();
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 0.4,
    speed: 2,
    effects: true,
});

gsap.to(".square#square3", {
    x: 100,
    scrollTrigger: {
        trigger: "#trigger",
        markers: true,
        pin: true,
        start: "top 1400",
        end: "+=100",
        toggleActions: "play reverse play reverse",
    },
});

// Chained sequence
// tl.to(".square", { x: 100, duration: 1 });
// tl.to(".square", { scale: 0.5, duration: 1 });
// tl.to(".square", { x: 200, scale: 1, duration: 1 }, "<0.1");

// const playButton = document.querySelector("#play");
// const pauseButton = document.querySelector("#pause");
// const reverseButton = document.querySelector("#reverse");

// playButton?.addEventListener("click", () => tl.play());
// pauseButton?.addEventListener("click", () => tl.pause());
// reverseButton?.addEventListener("click", () => tl.reverse());
