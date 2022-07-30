import SpoilersList from "@/components/ui/spoilersList/spoilersList";
import { getComponent, getComponents } from "@/helpers/helpers";
import { ITransitionData } from "@barba/core/dist/core/src/defs";

export default {
    namespace: "common",
    async beforeEnter({ next }: ITransitionData) {
        try {
            // if (getComponent("spoilers__list", next.container).component) {
            //     new SpoilersList(
            //         getComponent("spoilers__list", next.container)
            //     );
            // }
            // if (getComponent("spoiler-list").component) {
            //     getComponents("spoiler-list", next.container).map(
            //         (component) => new SpoilersList(component)
            //     );
            // }
            // getComponent("spoilers__list");
            if (getComponent("spoilers__list", next.container).component) {
                getComponents("spoilers__list", next.container).map(
                    (item) => new SpoilersList(item)
                );
            }
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {},

    afterLeave() {},
};
