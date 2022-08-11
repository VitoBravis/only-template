import Component, { ComponentProps } from "@/base/component";
import Slider from "@/components/ui/slider/slider";
import { getComponent } from "@/helpers/helpers";

export default class Modal extends Component {
    content: HTMLElement;
    value: HTMLElement;
    slider: Slider;

    constructor(element: ComponentProps) {
        super(element);
        this.nRoot.addEventListener("click", this.clickHandler);
        this.content = this.getElement("content") as HTMLElement;
        this.value = this.getElement("current-value") as HTMLElement;
        this.slider = new Slider(getComponent("slider", this.nRoot));

    }

    open = () => {
        this.content.classList.add("open");
    };
    close = () => {
        this.content.classList.remove("open");
        this.value.textContent = this.slider.getActiveCounter().getValue();

    };
    clickHandler = (e: Event) => {
        if ((<HTMLElement>e.target).closest(".button__open-close")) {

            if (this.content.classList.contains("open")) {
                this.close();
            } else {
                this.open();
            }
        }
    };

}
