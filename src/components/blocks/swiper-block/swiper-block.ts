import Component, { ComponentProps } from '@/base/component';
import Swiper, { SwiperOptions, Navigation } from "swiper";

export default class SwiperBlock extends Component {
    swiper: Swiper | undefined;

    constructor(element: ComponentProps) {
        super(element);

        const swiperConfig: SwiperOptions = {
            modules: [Navigation],
            speed: 400,
            spaceBetween: 100,
            slidesPerView: 1,
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
        }

        const container: HTMLElement | undefined = this.getElement('container');
        if (!container) return
        this.swiper = new Swiper(container, swiperConfig);
    }

    destroy = () => {
        // Destroy functions
        this.swiper?.destroy(true, true);
    }
}
