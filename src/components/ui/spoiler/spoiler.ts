import Component, { ComponentProps } from "@/base/component";

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);

        this.nRoot.addEventListener("click", this.clickHandler);
    }

    clickHandler = (e: any) => {
        const spoilerElement = e.target.closest(".spoiler__head");
        if (!spoilerElement) return;
        spoilerElement.lastElementChild.classList.toggle("active");
        const spoilerCollapse = spoilerElement.nextElementSibling;
        if (spoilerCollapse.style.maxHeight)
            spoilerCollapse.style.maxHeight = null;
        else
            spoilerCollapse.style.maxHeight = `${spoilerCollapse.scrollHeight}px`;
    };
}
