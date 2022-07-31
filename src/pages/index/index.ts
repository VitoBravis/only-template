import Modal from '@/components/blocks/modal/modal';
import Counter from '@/components/ui/counter/counter';
import MyButton from '@/components/ui/myButton/myButton';
import { getComponent, getComponents } from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            // Инициализация компонентов
            // new Counter(getComponent('counter'))
            const modal = new Modal(getComponent('modal'));
            // if (getComponent('counter', next.container).component) {
            //     getComponents('counter', next.container).forEach((component) => new Counter(component));
            // }

            const opnBtn = document.querySelector('.open-modal');
            opnBtn?.addEventListener('click', (e: Event) => {
                e.preventDefault();
                modal.nRoot.classList.add('active')
            })
            
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
