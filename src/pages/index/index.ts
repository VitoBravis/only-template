import ModalSection from '@/components/sections/modalSection/modalSection';
import Spoiler from '@/components/ui/spoiler/spoiler';
import { getComponent, getComponents} from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';



export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            if (getComponent('spoiler', next.container).component) {
                getComponents('spoiler', next.container).forEach((component) => new Spoiler(component));
            }
            if(getComponent('modalSection', next.container).component) {
                const modalSection = new ModalSection(getComponent('modalSection'));
            }

        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {

    },
};
