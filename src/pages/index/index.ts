import Spoiler from '@/components/ui/spoiler/spoiler';
import { getComponents } from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            // Инициализация компонентов
            const spoilers = getComponents('spoiler__item');
            spoilers.forEach((spoiler) => new Spoiler(spoiler));
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
