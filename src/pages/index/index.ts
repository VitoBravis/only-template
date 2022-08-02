import { getComponent, getComponents } from "@/helpers/helpers";
import { ITransitionData } from "@barba/core/dist/core/src/defs";
import Spoiler from "@/components/ui/spoiler/spoiler";
import Button from "@/components/ui/button/button";
import ModalSlider from "@/components/sections/modal-slider/modal-slider";
import onChange from "on-change";

const state = {
    counter: {
        activeSlide: 0,
        mainCount: new Map(),
    },
};

const result = document.querySelector(".main-counter")!;

export const watchedState = onChange(state, (path) => {
    if (path) {
        let i = 0;
        for (let amount of state.counter.mainCount.values()) {
            if (i == state.counter.activeSlide) {
                result.textContent = amount;
            }
            i = i + 1;
        }
    }
});

export default {
    namespace: "common",
    async beforeEnter({ next }: ITransitionData) {
        try {
            if (getComponent("spoiler").component) {
                getComponents("spoiler").map((item) => new Spoiler(item));
            }
            if (getComponent("button").component) {
                getComponents("button").map((item) => new Button(item));
            }
            const modal = new ModalSlider(getComponent("modal-slider"));

            const openModalBtn = document.querySelector(".open-modal-btn");
            openModalBtn?.addEventListener("click", () => {
                modal.toggleModal();
            });
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {},

    afterLeave() {},
};
