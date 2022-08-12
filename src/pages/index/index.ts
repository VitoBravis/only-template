import { getComponents, getComponent } from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';
import Swiper, { Navigation } from 'swiper';
import onChange from 'on-change';

import Spoiler from '@/components/ui/spoiler/spoiler';
import MainCounter from '@/components/ui/main-counter/main-counter';
import CarouselItem from '@/components/blocks/carousel-item/carousel-item';
import Modal from '@/components/common/modal/modal';

let spoilers: Spoiler[] = [];
let carouselItems: CarouselItem[] = [];

let modals: Modal[] = [];

function modalClickHander(e: Event) {
    const openBtn = (<HTMLElement>e.target).closest<HTMLElement>('[data-action="open-modal"]');

    if (!openBtn) return;

    const targetModal = modals.find((modal) => modal.id === openBtn.dataset.modalId);

    targetModal?.open();
}

const counterState = {
    value: 0,
};

let mainCounter = { value: 0 };

export const watchedCounter = onChange(counterState, (_, value) => {
    mainCounter.value = value as number;
});

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            spoilers = getComponents('spoiler').map((spoiler) => new Spoiler(spoiler));

            const mainCounterElem = getComponent('main-counter');

            if (mainCounterElem.component) mainCounter = new MainCounter(mainCounterElem);

            new Swiper(".swiper", {
                modules: [Navigation],
                navigation: {
                    nextEl: '.carousel__btn_next',
                    prevEl: '.carousel__btn_prev',
                },
                on: {
                    slideChange: function (swiper) {
                        const counterValue = swiper
                            .$wrapperEl
                            .children()[swiper.activeIndex]
                            .querySelector('.counter__value')
                            ?.textContent;

                        watchedCounter.value = parseInt(counterValue as string);
                    }
                }
            });

            carouselItems = getComponents('carousel-item').map((item) => new CarouselItem(item));

            modals = getComponents('modal').map((modal) => new Modal(modal));

            document.addEventListener('click', modalClickHander);
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {
        document.removeEventListener('click', modalClickHander);
        spoilers.forEach((spoiler) => spoiler.destroy());
        carouselItems.forEach((item) => item.destroy());
    },

    afterLeave() { },
};
