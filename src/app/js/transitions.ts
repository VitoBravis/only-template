import gsap from "gsap";
import { ITransitionData } from "@barba/core/dist/core/src/defs";

export const slideOn = (data: ITransitionData) => {
    return gsap.from(data.next.container, {
        opacity: 0,
        y: 150,
        duration: .8,
    });
}

export const slideDown = (data: ITransitionData) => {
    return gsap.to(".transition-in", {
        y: 0,
        clearProps: 'all'
    });
}

export const slideUp = (data: ITransitionData) => {
    gsap.to(".transition-in", {
        y: "-100%",
        clearProps: 'all'
    });
}

export const slideShutter = (data: ITransitionData) => {
    const tl = gsap.timeline();

    tl.to(".transition-out", { duration: 0, y:0 })
    tl.to(".transition-out__top", { y: "-100%", clearProps: 'all' })
    tl.to(".transition-out__bottom", { y: "100%", clearProps: 'all' }, "<")
    tl.to(".transition-out", { duration: 0, y:"-100%", clearProps: 'all' })
}
