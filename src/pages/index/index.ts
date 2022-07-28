import { ITransitionData } from "@barba/core/dist/core/src/defs";
import Spoiler from "@/components/ui/spoiler/spoiler";
import { getComponents } from "@/helpers/helpers";

export default {
    namespace: "common",
    async beforeEnter({ next }: ITransitionData) {
        try {
            // Инициализация компонентов
            const spoilers = getComponents("spoiler", next.container);

            if (spoilers.length) {
                for (const spoiler of spoilers) {
                    new Spoiler(spoiler);
                }
            }
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {},

    afterLeave() {},
};
