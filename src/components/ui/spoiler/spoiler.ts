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
        if (!sibling.classList.contains("spoiler__item-content--hidden")) {
            sibling.style.height = `0`;
            sibling.classList.add("spoiler__item-content--hidden");
        } else {
            sibling.style.height = `${sibling.scrollHeight}px`;
            sibling.classList.remove("spoiler__item-content--hidden");
        }
    };

    destroy = () => {};
}
