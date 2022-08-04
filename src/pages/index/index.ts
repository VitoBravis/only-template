import { ITransitionData } from '@barba/core/dist/core/src/defs';
import Spoiler from "@/components/ui/spoiler/spoiler";
import {getComponent} from "@/helpers/helpers";
import Modal from "@/components/ui/modal/modal";
import Slider from "@/components/ui/slider/slider";
import Counter from "@/components/ui/counter/counter";

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            new Spoiler(getComponent('spoiler'))
            new Modal(getComponent('modal'))
            new Slider(getComponent('slider'))
            new Counter(getComponent('counter'))

        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
