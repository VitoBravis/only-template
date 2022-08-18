import { getComponent, getComponents } from "@/helpers/helpers";
import { ITransitionData } from "@barba/core/dist/core/src/defs";
import Spoiler from "@/components/ui/spoiler/spoiler";
import ModalSlider from "@/components/sections/modal-slider/modal-slider";
import onChange from "on-change";

const state = {
    counter: {
        activeSlide: 0,
        mainCount: new Map(),
    },
};

export const watchedState = onChange(state, (path) => {
    const result = document.querySelector(".main-counter")!;
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
            if (next.url.path === "/") {
                if (getComponent("spoiler").component) {
                    getComponents("spoiler").map((item) => new Spoiler(item));
                }
            }
            if (next.url.path === "/counter.html") {
                const modal = new ModalSlider(getComponent("modal-slider"));

                const openModalBtn = document.querySelector(".open-modal-btn");
                openModalBtn?.addEventListener("click", () => {
                    modal.toggleModal();
                });
            }
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {},

    afterLeave() {},
};
