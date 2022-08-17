import Component, { ComponentProps } from "@/base/component";
import Slider from "@/components/ui/slider/slider";
import { getComponent } from "@/helpers/helpers";

export default class Modal extends Component {
    content: HTMLElement | undefined
    value: HTMLElement | undefined
    slider: Slider

    constructor(element: ComponentProps) {
        super(element);

        this.slider = new Slider(getComponent('slider', this.nRoot));

        this.content = this.getElement('content')
        this.value = this.getElement('count')
        this.value!.textContent = `${this.slider.getCounter().count}`

        this.nRoot.addEventListener('click', this.onClick);
    }


    onClick = (event: Event) => {
        const btn_open = (<HTMLElement>event.target).closest('.modal__button.open')
        const btn_close = (<HTMLElement>event.target).closest('.modal__button.close')

        btn_open && this.openModal()
        btn_close && this.closeModal()
    };

    openModal = () => {
        this.content!.classList.toggle('hidden')
    };
    closeModal = () => {
        this.content!.classList.toggle('hidden')
        this.value!.textContent = `${this.slider.getCounter().count}`

    };

    destroy = () => {
        this.nRoot.removeEventListener('click', this.onClick)
    }
}
