const square = document.querySelector(".square") as HTMLDivElement;

const keyframes = [
    { transform: "translateX(0) translateY(0)", easing: "ease-in-out" },
    { transform: "translateX(100px)" },
    { transform: "translateX(100px) translateY(100px)", easing: "steps(3)" },
    { transform: "translateX(0) translateY(100px)" },
    { transform: "translateX(0) translateY(0)" },
];

const options: KeyframeAnimationOptions = {
    duration: 5000,
    iterations: Infinity,
    easing: "ease-in-out",
};

square.animate(keyframes, options);
