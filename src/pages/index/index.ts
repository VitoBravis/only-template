import Modal from '@/components/blocks/modal/modal';
import ModalSection from '@/components/sections/modalSection/modalSection';
import { getComponent } from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';



export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            new ModalSection(getComponent('modalSection'));
            
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
