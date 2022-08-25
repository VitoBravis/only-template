import { ITransitionData } from '@barba/core/dist/core/src/defs';
import { getComponents, getComponent } from '@/helpers/helpers';


import Spoiler from '@/components/ui/spoiler/spoiler';

import CounterCurrentValue from '@/components/blocks/counterCurrentValue/counterCurrentValue';
import CounterContainer from '@/components/blocks/counterContainer/counterContainer';




export const state = {
    valueCounter: 0,
};
export const changeValueCounter = (value: number) => {
    state.valueCounter = value;
};

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


            const counterCurrentValue = getComponents('counterCurrentValue', next.container);
            if(counterCurrentValue.length) {
                for(const item of counterCurrentValue){
                    new CounterCurrentValue(item)
                }
            }

            const counterCointainer = getComponent('counterContainer', next.container)
            if(counterCointainer.component){
                new CounterContainer(counterCointainer)

            }
          
           
            
            

        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() { },
};
