import Component, { ComponentProps } from "@/base/component";
import { getComponent } from "@/helpers/helpers";
import Slider from "@/components/ui/slider/slider";

export default class ModalSlider extends Component {
    modalSlider: HTMLElement;
    button: HTMLElement;
    constructor(element: ComponentProps) {
        super(element);
        this.modalSlider = this.nRoot;
        this.button = this.getElement("button")!;

        this.button.addEventListener("click", this.toggleModal);

        new Slider(getComponent("slider"));
    }

    toggleModal = () => {
        this.modalSlider.classList.toggle("open");
        document.body.classList.toggle("lock");
    };
}
