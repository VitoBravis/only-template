import Component, { ComponentProps } from "@/base/component";

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);
        this.nRoot.addEventListener("click", this.clickHandler);
    }

    clickHandler = (e: Event) => {
        const headBtn = (<HTMLElement>e.target).closest(
            ".spoiler__btn"
        ) as HTMLElement;
        const information = (<HTMLElement>e.target).closest(".spoiler__btn")
            ?.nextElementSibling as HTMLElement;

        if (!information) return;

        if (information.style.maxHeight) {
            information.style.maxHeight = "";
        } else {
            information.style.maxHeight = `${information.scrollHeight}px`;
        }

        headBtn.classList.toggle("spoiler__btn_activ");
    };
}
