import Component, { ComponentProps } from "@/base/component";

export default class Transition extends Component {
    leave: HTMLElement;
    enter: HTMLElement;

    constructor(element: ComponentProps) {
        super(element);
        this.leave = this.getElement("leave") as HTMLElement;
        this.enter = this.getElement("enter") as HTMLElement;
    }

    hide = () => {
        this.leave.classList.add("iter");
    };


    show = () => {
        this.enter.style.transform = "translateY(0vh)";
        this.leave.classList.remove("iter");
        Array.from(this.enter.children).forEach(el => el.classList.add("trans"));
        setTimeout(() => {
            this.enter.style.transform = "translateY(150vh)";
            Array.from(this.enter.children).forEach(el => el.classList.remove("trans"));
        }, 1000);
    };

    destroy = () => {
        // Destroy functions
    };
}
