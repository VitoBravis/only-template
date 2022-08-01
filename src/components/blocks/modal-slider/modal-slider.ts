import Component, { ComponentProps } from '@/base/component';
import SwiperBlock from "@/components/blocks/swiper-block/swiper-block";
import { getComponent } from "@/helpers/helpers";

export default class ModalSlider extends Component {
    closeBtn: HTMLElement | undefined;
    swiperBlock: SwiperBlock | undefined;

    constructor(element: ComponentProps) {
        super(element);

        this.closeBtn = this.getElement('button-close');
        this.closeBtn?.addEventListener('click', () => this.close());
        const findSwiper = getComponent('swiper-block', this.nRoot);
        if (findSwiper) this.swiperBlock = new SwiperBlock(findSwiper);
    }

    open = () => {
        this.nRoot.setAttribute('open', 'open')
        this.nRoot.classList.add('modal-slider_open');
    };

    close = () => {
        this.nRoot.removeAttribute('open') ;
        this.nRoot.classList.remove('modal-slider_open');
    };

    destroy = () => {
        // Destroy functions
    }
}
