import Component, { ComponentProps } from '@/base/component';
import { resize } from "@/helpers/helpers";

export default class Spoiler extends Component {
    isOpen = false;
    headElement: HTMLElement | undefined;
    contentElement: HTMLElement | undefined;
    collapseElement?: HTMLElement | undefined;

    constructor(element: ComponentProps) {
        super(element);

        this.contentElement = this.getElement('content');
        this.headElement = this.getElement('head');
        this.collapseElement = this.getElement('collapse');

        resize(() => this.isOpen ? this.setCollapseHeight(this.getScrollHeight()) : null);
    }

    open(): void {
        this.isOpen = true;
        this.nRoot.classList.add('open');
        this.setCollapseHeight(`${this.contentElement?.scrollHeight}px`);
    }
    close(): void {
        this.nRoot.classList.remove('open');
        this.setCollapseHeight('0');
        this.isOpen = false;
    }

    /**
     * @description Ручка для удобного получения высоты блока __content
     * @return Значение высоты в px
     */
    getScrollHeight(): string {
        return `${this.contentElement?.scrollHeight}px`;
    }

    /**
     * @description Ручка для удобной установки высоты блока __collapse
     * @param value - Значение высоты блока
     * @return
     */
    setCollapseHeight(value: string): any  {
        this.collapseElement ? this.collapseElement.style.height = value : null;
    }
}
