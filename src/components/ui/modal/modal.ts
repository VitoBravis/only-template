import Component, { ComponentProps } from "@/base/component";

export default class Modal extends Component {
    constructor(element: ComponentProps) {
        super(element);
        this.nRoot.addEventListener("click", this.clickHandler);
    }

    clickHandler = (e: Event) => {
        const modalContent = this.nRoot.children[3]
        const activeSlide = (<HTMLElement>e.target).closest(".swiper-slide-active")

        if((<HTMLElement>e.target).closest(".button__open-close")) {
            modalContent.classList.toggle('open')
        }
        if(activeSlide) {
            let valueActiveSlide = activeSlide.children[1].children[1].innerHTML;
            this.nRoot.children[1].innerHTML = valueActiveSlide
        }
    };
}
