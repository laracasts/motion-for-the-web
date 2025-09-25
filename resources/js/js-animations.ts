const square = document.querySelector(".square") as HTMLDivElement;
const playButton = document.querySelector("#play") as HTMLButtonElement;
const pauseButton = document.querySelector("#pause") as HTMLButtonElement;
const reverseButton = document.querySelector("#reverse") as HTMLButtonElement;
const slider = document.querySelector("#slider") as HTMLInputElement;

const keyframes = [
    { transform: "translateX(0) translateY(0)", easing: "ease-in-out" },
    {
        transform: "translateX(100px) rotate(45deg)",
        offset: 0.2,
        easing: "ease-in-out",
    },
    {
        transform: "translateX(100px) translateY(100px) scale(0.8)",
        easing: "ease-in-out",
    },
    {
        transform: "translateX(0) translateY(100px) rotate(-90deg)",
        offset: 0.8,
        easing: "ease-in-out",
    },
    {
        transform: "translateX(0) translateY(0) rotate(0deg)",
        easing: "ease-in-out",
    },
];

const options: KeyframeAnimationOptions = {
    duration: 3000,
    iterations: Infinity,
};

const animation: Animation = square.animate(keyframes, options);
playButton.addEventListener("click", () => {
    animation.play();
});

pauseButton.addEventListener("click", () => {
    animation.pause();
});
reverseButton.addEventListener("click", () => {
    animation.reverse();
});
slider.addEventListener("input", () => {
    // Sync the slider value to the animation speed.
    // animation.playbackRate = slider.valueAsNumber;

    // Sync the animation progress to the slider value.
    const totalDuration = animation.effect?.getTiming().duration as number;
    console.log({ totalDuration });

    animation.currentTime = slider.valueAsNumber * totalDuration;
});
