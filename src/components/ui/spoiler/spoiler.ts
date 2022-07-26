import Component, { ComponentProps } from "@/base/component";

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);

        const itemLabel = this.getElements("item-label") as HTMLElement[];
        itemLabel.forEach((item) =>
            item.addEventListener("click", this.labelClick)
        );
    }

    labelClick(e: MouseEvent) {
        const target = e.target as HTMLElement;
        target.classList.toggle("spoiler__item-label--active");
        if (target.nextElementSibling) {
            target.nextElementSibling.classList.toggle(
                "spoiler__item-content--hidden"
            );
        }
    }
}
