import Modal from '@/components/blocks/modal/modal';
import ModalSection from '@/components/sections/modalSection/modalSection';
import { getComponent } from '@/helpers/helpers';
import Spoiler from '@/components/ui/spoiler/spoiler';
import { getComponent, getComponents} from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';



export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            new ModalSection(getComponent('modalSection'));
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
