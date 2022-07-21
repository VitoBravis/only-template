import Component, { ComponentProps } from "@/base/component";

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);

        this.nRoot.addEventListener("click", this.clickHandler);
    }

    clickHandler = (e: Event) => {
        const target = e.target as HTMLElement;
        const head = target?.closest(".spoiler__head");
        const collapse = this.nRoot.querySelector(
            ".spoiler__collapse"
        ) as HTMLElement;

        if (head) {
            this.nRoot.classList.toggle("active");
            const isActive = this.nRoot.classList.contains("active");

            setTimeout(() => {
                if (isActive) {
                    collapse.style.height = `${collapse.scrollHeight}px`;
                } else {
                    collapse.style.height = "0";
                }
            }, 300);
        }
    };
}
