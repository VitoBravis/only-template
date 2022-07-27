import Component, { ComponentProps } from "@/base/component";

export default class Spoiler extends Component {
    spoilerLabels: HTMLElement[] | undefined;
    constructor(element: ComponentProps) {
        super(element);
        this.spoilerLabels = this.getElements("item-label");
        this.spoilerLabels.forEach((item) =>
            item.addEventListener("click", this.handleClick)
        );
    }

    handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const sibling = target.nextElementSibling as HTMLElement;
        target.classList.toggle("spoiler__item-label--active");
        sibling.classList.contains("spoiler__item-content--hidden")
            ? this.open(sibling)
            : this.close(sibling);
    };

    close = (elem: HTMLElement) => {
        elem.style.height = `0`;
        elem.classList.add("spoiler__item-content--hidden");
    };

    open = (elem: HTMLElement) => {
        elem.style.height = `${elem.scrollHeight}px`;
        elem.classList.remove("spoiler__item-content--hidden");
    };

    destroy = () => {};
}
