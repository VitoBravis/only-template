import SpoilersList from "@/components/ui/spoilersList/spoilersList";
import { getComponent } from "@/helpers/helpers";
import { ITransitionData } from "@barba/core/dist/core/src/defs";

export default {
    namespace: "common",
    async beforeEnter({ next }: ITransitionData) {
        try {
            new SpoilersList(getComponent("spoilers__list"));
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {},

    afterLeave() {},
};
