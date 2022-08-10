import { getComponent, getComponents } from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';

import Spoiler from '@/components/ui/spoiler/spoiler';
import Modal from '@/components/ui/modal/modal';



export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            if (getComponent('spoiler', next.container).component) {
                getComponents('spoiler', next.container).map((item) => new Spoiler(item));
            }

            const modalSlider = getComponent('modal')
            modalSlider.component && new Modal(modalSlider)
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() { },
};
