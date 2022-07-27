import { getComponent } from './../../app/js/helpers/helpers';
import Spoiler from '@/components/blocks/spoiler/spoiler';
import { ITransitionData } from '@barba/core/dist/core/src/defs';

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            // Инициализация компонентов
            new Spoiler(getComponent("spoiler",next.container))
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
