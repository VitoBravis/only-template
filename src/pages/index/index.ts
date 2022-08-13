import { ITransitionData } from "@barba/core/dist/core/src/defs";
import Spoiler from "@/components/ui/spoiler/spoiler";
import { getComponent } from "@/helpers/helpers";
import Modal from "@/components/ui/modal/modal";

let spoiler = {} as Spoiler;
let modal = {} as Modal;
export default {
    namespace: "common",
    async beforeEnter({ next }: ITransitionData) {
        try {
            if (next.url.path === "/") {
                spoiler = new Spoiler(getComponent("spoiler"));
            }
            if (next.url.path === "/task2.html"){
                modal = new Modal(getComponent("modal"))
            }

        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {
        spoiler.destroy();
        modal.destroy();
    },

    afterLeave() {
    }
};
