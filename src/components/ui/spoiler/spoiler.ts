import Component, { ComponentProps } from "@/base/component";

export default class Spoiler extends Component {
    spoilerLabels: HTMLElement[] | undefined;
    constructor(element: ComponentProps) {
        super(element);
        this.spoilerLabels = this.getElements("item-label");
        this.spoilerLabels.forEach((item) =>
            item.addEventListener("click", this.handleClick)
        );
        console.log(this.nRoot);
    }

    handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        target.classList.toggle("spoiler__item-label--active");
        target.nextElementSibling!.classList.toggle(
            "spoiler__item-content--hidden"
        );
    };

    destroy = () => {};
}
