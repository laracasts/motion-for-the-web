import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".square",
        markers: true,
        start: "top bottom-=200",
        end: "75% 200",
        // toggleActions: "play reverse play reverse",
        scrub: 0.5,
    },
});

tl.to(".square", { x: 100 });
tl.to(".square", { scale: 0.5 });
tl.to(".square", { scale: 1, x: 200 });
