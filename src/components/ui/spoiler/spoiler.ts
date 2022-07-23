import Component, { ComponentProps } from "@/base/component";

export default class Spoiler extends Component {
    isOpen = false;
    contentElement: HTMLElement | undefined;

    constructor(element: ComponentProps) {
        super(element);
        if (this.getElement("content")) {
            this.contentElement = this.getElement("content");
        }
        this.listener = this.listener.bind(this);
        this.nRoot.onclick = this.listener;
    }

    open() {
        if (!this.nRoot.classList.contains("open")) {
            if (this.contentElement) {
                this.contentElement.style.height = `${this.contentElement.scrollHeight}px`;
            }
            this.isOpen = true;
            this.nRoot.classList.add("open");
        }
    }

    close() {
        if (this.nRoot.classList.contains("open")) {
            this.nRoot.classList.remove("open");
            if (this.contentElement) {
                this.contentElement.style.height = "0";
            }
            this.isOpen = false;
        }
    }

    listener() {
        this.isOpen ? this.close() : this.open();
    }

    destroy = () => {
        // Destroy functions
        this.nRoot.remove();
    };
}
