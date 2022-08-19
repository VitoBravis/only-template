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
        const amount = Array.from(state.counter.mainCount.values())[
            state.counter.activeSlide
        ];
        result.textContent = amount;
    }
});

export default {
    namespace: "common",
    async beforeEnter({ next }: ITransitionData) {
        try {
            if (location.pathname === "/") {
                if (getComponent("spoiler").component) {
                    getComponents("spoiler").map((item) => new Spoiler(item));
                }
            }
            if (location.pathname === "/counter.html") {
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
