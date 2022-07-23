import { ITransitionData } from '@barba/core/dist/core/src/defs';
import { getComponents } from "@/helpers/helpers";
import Spoilers from "@/components/ui/spoilers/spoilers";

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            // Инициализация компонентов
            const spoilersWrappers = getComponents('spoilers');

            for (const spoilersWrapper of spoilersWrappers) {
                new Spoilers(spoilersWrapper);
            }
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
