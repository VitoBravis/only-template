import Component, { ComponentProps } from "@/base/component";

export default class SpoilersList extends Component {
    constructor(element: ComponentProps) {
        super(element);

        this.nRoot.addEventListener("click", this.clickHandler);
    }

    clickHandler = (e: Event) => {
        const spoilerElement = (<HTMLElement>e.target).closest(".spoiler");

        if (!spoilerElement) return;

        spoilerElement.classList.toggle("open");
        const content = <any>spoilerElement.querySelector(".spoiler__content");
        if (spoilerElement.classList.contains("open")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    };
}
