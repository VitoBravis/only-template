import { getComponent, getComponents } from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';
import Swiper from 'swiper';


//import Spoiler from '@/components/ui/spoiler/spoiler';
//import Counter from '@/components/sections/counter/counter';
//import Button from '@/components/ui/button/button';


export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            const btn = getComponent('button')
            const counter = getComponent('counter')

            //btn.component && new Button(btn)
            //counter.component && new Counter(counter)

            //if (getComponent('spoiler', next.container).component) {
            //    getComponents('spoiler', next.container).map((item) => new Spoiler(item));
            //}
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
