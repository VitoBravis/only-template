import Component, { ComponentProps } from '@/base/component';
import SwiperBlock from "@/components/blocks/swiper-block/swiper-block";
import { getComponent } from "@/helpers/helpers";
import { fromEvent } from "rxjs";

export default class ModalSlider extends Component {
    closeBtn: HTMLElement | undefined;
    swiperBlock: SwiperBlock | undefined;

    constructor(element: ComponentProps) {
        super(element);

        this.closeBtn = this.getElement('button-close');
        if(this.closeBtn) fromEvent(this.closeBtn, 'click').subscribe(this.close)
        const findSwiper = getComponent('swiper-block', this.nRoot);
        if (findSwiper) this.swiperBlock = new SwiperBlock(findSwiper);
    }

    open = () => {
        const dialog = this.nRoot as HTMLDialogElement;
        dialog.classList.add('modal-slider_open');
        dialog.show();
    };

    close = () => {
        const dialog = this.nRoot as HTMLDialogElement;
        const subscribe = fromEvent(dialog, 'transitionend').subscribe(() => {
            dialog.classList.remove('modal-slider_open');
            subscribe.unsubscribe();
        })
        dialog.close();

    };

    destroy = () => {
        // Destroy functions
    }
}
