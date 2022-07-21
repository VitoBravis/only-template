import { ITransitionData } from '@barba/core/dist/core/src/defs';
import Spoiler from '@/components/common/spoiler/spoiler';
import { getComponent } from '@/helpers/helpers';

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            // Инициализация компонентов
				new Spoiler(getComponent('spoiler'))

        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
