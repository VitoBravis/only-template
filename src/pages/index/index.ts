import { ITransitionData } from '@barba/core/dist/core/src/defs';
import Spoiler from '@/components/ui/spoiler/spoiler';
import SpoilerList from '@/components/blocks/spoiler-list/spoiler-list';
import { getComponent, getComponents } from '@/helpers/helpers';

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            if (getComponent('spoiler-list').component) {
                getComponents('spoiler-list', next.container).map((component) => new SpoilerList(component));
            }
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
