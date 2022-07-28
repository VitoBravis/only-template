import SpoilerWrapper from '@/components/blocks/spoiler-wrapper/spoiler-wrapper';
import Spoiler from '@/components/ui/spoiler/spoiler';
import { getComponent,getComponents } from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            if (getComponent('spoiler', next.container).component) {
                getComponents('spoiler', next.container).map((item) => new Spoiler(item));
            }
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
