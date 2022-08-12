import { ITransitionData } from '@barba/core/dist/core/src/defs';
import Spoiler from "@/components/ui/spoiler/spoiler";
import {getComponent} from "@/helpers/helpers";
import Modal from "@/components/ui/modal/modal";
import Slider from "@/components/ui/slider/slider";
import Counter from "@/components/ui/counter/counter";
import TransitionOut from "@/components/common/transition-out/transition-out";
import Transition from "@/components/common/transition/transition";

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            // new Spoiler(getComponent('spoiler'))
            // new Modal(getComponent('modal'))

        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
