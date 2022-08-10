import Component, { ComponentProps } from "@/base/component";

export default class Spoiler extends Component {
    isOpen: boolean;
    collapse: HTMLElement;

    constructor(element: ComponentProps) {
        super(element);
        this.isOpen = false;
        this.collapse = this.getElement('collapse')!;
        this.nRoot.addEventListener("click", this.clickHandler);
    }

    clickHandler = (e: Event) => {
        this.isOpen ? this.close() : this.open();
    };

    close = () => {
        this.isOpen = false;
        this.nRoot.classList.remove("active");
        this.collapse.style.height = "0";
    }

    open = () => {
        this.isOpen = true;
        this.nRoot.classList.add("active");
        this.collapse.style.height = `${this.collapse.scrollHeight}px`
    }
}
