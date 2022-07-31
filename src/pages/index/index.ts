import Modal from '@/components/blocks/modal/modal';
import Counter from '@/components/ui/counter/counter';
import { getComponent, getComponents } from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';



export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            const initialCounters = [] as Array<Object>;
            const valueContainer = document.querySelector('.counter-value') as HTMLElement;
            if (getComponent('counter', next.container).component) {
                getComponents('counter', next.container).forEach((component) => initialCounters.push(new Counter(component)));
            }
            const modal = new Modal(getComponent('modal'), valueContainer, initialCounters);

            const opnBtn = document.querySelector('.open-modal');
            opnBtn?.addEventListener('click', (e: Event) => {
                e.preventDefault();
                modal.nRoot.classList.add('active')
            })
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
