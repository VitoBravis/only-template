import Component, { ComponentProps } from "@/base/component";

export default class Spoiler extends Component {
    controlElement: HTMLElement;
    collapseElement: any;
    isOpen: boolean;

    constructor(element: ComponentProps) {
        super(element);

        this.controlElement = this.nRoot;
        this.isOpen = true;
        this.collapseElement = this.nRoot.querySelector(".spoiler__content");
        /*
         * Инициализация других полей класса (this.collapseElement, isOpen и др.)
         */
    }

    open = () => {
        // Метод для открытия спойлера
        this.controlElement.classList.toggle("open");
        this.collapseElement.style.maxHeight =
            this.collapseElement.scrollHeight + "px";
        this.isOpen = true;
    };

    close = () => {
        // Метод для закрытия спойлера
        this.collapseElement.style.maxHeight = null;
        this.controlElement.classList.remove("open");
        this.isOpen = false;
    };
}
