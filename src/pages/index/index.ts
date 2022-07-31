import Modal from '@/components/blocks/modal/modal';
import Counter from '@/components/ui/counter/counter';
import { getComponent, getComponents } from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';



export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            const valueContainer = document.querySelector('.counter-value') as HTMLElement;
            const modal = new Modal(getComponent('modal'), valueContainer);
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
