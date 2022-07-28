import { ITransitionData } from '@barba/core/dist/core/src/defs';
import Spoiler from "@/components/ui/spoiler/spoiler";
import {getComponent, getComponents} from "@/helpers/helpers";

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            // Инициализация компонентов
            if (getComponent('spoiler', next.container).component) {
                getComponents('spoiler', next.container).map((item) => new Spoiler(item));
            }
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
