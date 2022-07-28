import { getComponent, getComponents } from './../../app/js/helpers/helpers';
import Spoiler from '@/components/blocks/spoiler/spoiler';
import { ITransitionData } from '@barba/core/dist/core/src/defs';

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
