import { ITransitionData } from '@barba/core/dist/core/src/defs';
import Spoiler from '@/components/ui/spoiler/spoiler';
import { getComponents } from '@/helpers/helpers';

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            const spoilers = getComponents('spoiler');
          
           

            if (spoilers.length) {
                for (const spoiler of spoilers) {
                    new Spoiler(spoiler);
                }
            }
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() { },
};
