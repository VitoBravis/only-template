import { ITransitionData } from "@barba/core/dist/core/src/defs";
import { getComponents } from "@/helpers/helpers";
import SpoilerWrapper from "@/components/blocks/spoiler-wrapper/spoiler-wrapper";
import CounterWrapper from "@/components/blocks/counter-wrapper/counter-wrapper";

// TODO: починить типы
export default {
    namespace: 'common',
    components: {},

    async beforeEnter({ next }: ITransitionData) {
        try {
            // Инициализация компонентов
            const spoilerEl = getComponents('spoiler-wrapper', next.container);
            if (spoilerEl) spoilerEl.forEach((el) => {
                this.components.spoilerWrapper = new SpoilerWrapper(el);
            });
            const counterEl = getComponents('counter-wrapper', next.container);
            if (counterEl) counterEl.forEach((el) => {
                this.components.counterWrapper = new CounterWrapper(el);
            });
        } catch (e) {
            console.error(e);
        }
    },

    beforeLeave() {
        for(let component of Object.values(this.components)) component.destroy();
        this.components = {};
    },

    afterLeave() {},
};
