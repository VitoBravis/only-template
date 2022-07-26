import Component, { ComponentProps } from '@/base/component';
import { resize } from "@/helpers/helpers";

export default class Spoiler extends Component {
    isOpen = false;
    // TODO: починить типизацию
    headElement: HTMLElement | any;
    contentElement: HTMLElement | any;
    collapseElement: HTMLElement | any;
    button: HTMLElement | any;

    constructor(element: ComponentProps) {
        super(element);

        this.contentElement = this.getElement('content');
        this.headElement = this.getElement('head');
        this.collapseElement = this.getElement('collapse');

        resize(() => this.setCollapseHeight(`${this.contentElement.scrollHeight}px`));
    }

    open() {
        this.isOpen = true;
        this.nRoot.classList.add('open');
        this.setCollapseHeight(`${this.contentElement.scrollHeight}px`);
    }
    close() {
        this.nRoot.classList.remove('open');
        this.setCollapseHeight('0');
        this.isOpen = false;
    }
    setCollapseHeight(value: String) {
        if (this.isOpen) this.collapseElement.style.height = value;
    }
    clickHandler() {
        this.isOpen ? this.close() : this.open();
    }
}
