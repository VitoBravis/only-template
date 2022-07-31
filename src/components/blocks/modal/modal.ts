import Component, { ComponentProps } from '@/base/component';
import Counter from '@/components/ui/counter/counter';
import { getComponents } from '@/helpers/helpers';
import Swiper from 'swiper';
import { Navigation } from 'swiper';
import { runInThisContext } from 'vm';

export default class Modal extends Component {
    swiper: any;
    closeBtn: HTMLElement;
    value: number;
    counters: any;

    constructor(element: ComponentProps) {
        super(element);
        this.counters = [];
        this.closeBtn = this.getElement('button')!;
        this.value = this.swiper.realIndex;
        this.swiper = new Swiper(".swiper", {
            modules: [Navigation],
            loop: true,
            direction: "horizontal",
            slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            // on: {
            //     init: () => {
            //         getComponents('counter').forEach((component) => this.counters.push(new Counter(component)));
            //     },
            // }
        })!;
        this.closeBtn.addEventListener('click', this.onClose);

        this.swiper.on('slideChange',  () => {
            console.log(this.swiper.realIndex);

            this.value = this.swiper.realIndex;
        });
    }

    onClose = (e: MouseEvent) => {
      e.preventDefault();

      this.nRoot.classList.remove('active');
    }

    getCounterValue = () => {
        return this.value;
    }
    
}
