import Component, { ComponentProps } from "@/base/component";

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);

        this.nRoot.addEventListener("click", this.clickHandler);
    }
    clickHandler = (e: Event) => {
        const spoilerElement = (<HTMLElement>e.target).closest(
            ".spoiler__element"
        );
        if (!spoilerElement) return;

        const spoilerCollapse = spoilerElement.children[1] as HTMLElement;
        const spoilerIcon = spoilerElement.children[0]
            .children[1] as HTMLElement;
        const spoilerTitle = spoilerElement.children[0]
            .children[0] as HTMLElement;

        spoilerIcon.classList.toggle("active");
        const iconIsActive = spoilerIcon.classList.contains("active");
        spoilerCollapse.style.height = `${
            !!iconIsActive ? spoilerCollapse.scrollHeight : 0
        }px`;
        spoilerTitle.style.color = !!iconIsActive ? "#02818A" : "#012B34";
    };
}
