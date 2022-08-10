import Spoiler from '@/components/ui/spoiler/spoiler';
import { getComponent, getComponents} from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            // Инициализация компонентов
            if (getComponent('spoiler', next.container).component) {
                getComponents('spoiler', next.container).forEach((component) => new Spoiler(component));
            }
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
