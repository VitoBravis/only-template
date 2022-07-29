import Spoiler from '@/components/ui/spoiler/spoiler';
import { getComponents } from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            // Инициализация компонентов
            const spoilerList: HTMLElement = next.container.querySelector('.spoiler__list')!;
            getComponents('spoiler__head', spoilerList).forEach((component) => {
                new Spoiler(component)
            })
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() { },
};
