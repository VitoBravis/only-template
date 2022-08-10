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
        const dialog = this.nRoot as HTMLDialogElement;
        dialog.show();
    };

    close = () => {
        const dialog = this.nRoot as HTMLDialogElement;
        dialog.close();

    };

    destroy = () => {
        // Destroy functions
    }
}
