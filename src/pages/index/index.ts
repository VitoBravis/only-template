import Spoiler from "@/components/ui/spoiler/spoiler";
import { getComponent } from "@/helpers/helpers";
import { ITransitionData } from "@barba/core/dist/core/src/defs";

export default {
    namespace: "common",
    async beforeEnter({ next }: ITransitionData) {
        try {
            new Spoiler(getComponent("spoiler"));
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {},

    afterLeave() {},
};
