import Modal from '@/components/blocks/modal/modal';
import Counter from '@/components/ui/counter/counter';
import MyButton from '@/components/ui/myButton/myButton';
import { getComponent } from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            // Инициализация компонентов
            // new Counter(getComponent('counter'))
            new Modal(getComponent('modal'))
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
