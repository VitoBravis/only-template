import { getComponent, getComponents } from "@/helpers/helpers";
import { ITransitionData } from "@barba/core/dist/core/src/defs";
import Spoiler from "@/components/ui/spoiler/spoiler";

export default {
    namespace: "common",
    async beforeEnter({ next }: ITransitionData) {
        try {
            if (getComponent("spoiler").component) {
                getComponents("spoiler").map((item) => new Spoiler(item));
            }
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {},

    afterLeave() {},
};
