import { ITransitionData } from '@barba/core/dist/core/src/defs';
import { getComponents } from "@/helpers/helpers";
import SpoilerWrapper from "@/components/blocks/spoiler-wrapper/spoiler-wrapper";
import CounterWrapper from "@/components/blocks/counter-wrapper/counter-wrapper";

export default {
    namespace: 'common',

    async beforeEnter({ next }: ITransitionData) {
        try {
            // Инициализация компонентов
            const spoilerWrapper = getComponents('spoiler-wrapper');
            if (spoilerWrapper) spoilerWrapper.forEach((spoilerWrapper) =>
                new SpoilerWrapper(spoilerWrapper)
            );
            const counterWrapper = getComponents('counter-wrapper');
            if (counterWrapper) counterWrapper.forEach((counterWrapper) =>
                new CounterWrapper(counterWrapper)
            );
        } catch (e) {
            console.error(e);
        }
    },

    beforeLeave() {

    },

    afterLeave() {},
};
