import { animate, createDraggable, spring } from "animejs";

createDraggable(".square", {
    snap: 64,
    container: "body",
    containerPadding: 64,
    releaseEase: spring({
        stiffness: 1000,
        damping: 22,
    }),
    onRelease: () => {
        animate(".square", {
            rotate: "+=90",
            ease: spring({
                stiffness: 1000,
                damping: 22,
            }),
            delay: 300,
        });
    },
});
