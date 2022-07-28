import Component, { ComponentProps } from "@/base/component";

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);

        this.nRoot.addEventListener("click", this.onClickHandler);
    }

    onClickHandler = (e: Event) => {
        const spoilerElement = (<HTMLElement>e.target).closest(
            ".spoiler__head"
        );

        if (!spoilerElement) return false;

        const collapse = spoilerElement.nextElementSibling as HTMLElement;

        spoilerElement.classList.toggle("spoiler__head_active");

        collapse.style.maxHeight = collapse.style.maxHeight
            ? ""
            : `${collapse.scrollHeight}px`;
    };
}
