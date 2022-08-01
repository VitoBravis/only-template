import Modal from '@/components/blocks/modal/modal';
import { getComponent, getComponents } from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';



export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            const modal = new Modal(getComponent('modal'));
            const opnBtn = document.querySelector('.open-modal');
            opnBtn?.addEventListener('click', (e: Event) => {
                e.preventDefault();
                modal.onOpen();
            })
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
