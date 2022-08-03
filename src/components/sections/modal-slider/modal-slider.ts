import Component, { ComponentProps } from "@/base/component";
import { getComponent } from "@/helpers/helpers";
import Slider from "@/components/ui/slider/slider";

export default class ModalSlider extends Component {
    constructor(element: ComponentProps) {
        super(element);

        this.nRoot.addEventListener("click", this.clickHandler);

        new Slider(getComponent("slider"));
    }

    clickHandler = (e: any) => {
        const button = e.target.closest(".modal-slider__button");
        if (!button) return;
        this.toggleModal();
    };

    toggleModal = () => {
        this.nRoot.classList.toggle("open");
        document.body.classList.toggle("lock");
    };
}
