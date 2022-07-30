import { ITransitionData } from '@barba/core/dist/core/src/defs';
import { getComponents } from '@/helpers/helpers';

import Spoiler from '@/components/ui/spoiler/spoiler';
import MyButton from '@/components/ui/myButton/myButton';
import MyModal from '@/components/blocks/myModal/myModal';
import Slider from '@/components/ui/slider/slider';
import Counter from '@/components/ui/counter/counter';
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
            const btn = getComponents('myButton');
            for (const btns of btn) {
                new MyButton(btns);
            }
            const modal = getComponents('myModal');
            for (const item of modal) {
                new MyModal(item);
            }
            const slider = getComponents('slider');
            for (const item of slider) {
                new Slider(item);
            }
            const counter = getComponents('counter');
            for (const item of counter) {
                new Counter(item);
            }

        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() { },
};
