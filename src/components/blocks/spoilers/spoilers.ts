import Component, { ComponentProps } from "@/base/component";

export default class Spoilers extends Component {
    constructor(element: ComponentProps) {
        super(element);

        this.nRoot.addEventListener("click", this.spoilerClickHandler);
    }

    spoilerClickHandler(e: any) {
        if (e.target.parentElement.classList.contains("spoiler__collapse"))
            return;

        const spoilerElement = e.target.closest(".spoiler");

        if (!spoilerElement) return;

        const collapse = spoilerElement.children[1];
        const head = spoilerElement.children[0];

        if (!collapse.style.height) {
            head.classList.add("active");
            collapse.classList.add("active");
            collapse.style.cssText = `
                    height: ${collapse.scrollHeight}px;
                `;
            return;
        }

        head.classList.remove("active");
        collapse.classList.remove("active");
        collapse.style = "";
    }

    destroy = () => {
        // Destroy functions
    };
}
