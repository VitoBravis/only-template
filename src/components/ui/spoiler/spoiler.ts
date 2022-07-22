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
        if (spoilerIcon.classList.contains("active")) {
            spoilerCollapse.style.height = `${spoilerCollapse.scrollHeight}px`;
            spoilerIcon.style.transform = "rotate(45deg)";
            spoilerTitle.style.color = "#02818A";
        } else {
            spoilerCollapse.style.height = "0px";
            spoilerIcon.style.transform = "rotate(-45deg)";
            spoilerTitle.style.color = "#012B34;";
        }
    };
}
