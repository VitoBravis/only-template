import Component, { ComponentProps } from "@/base/component";

export default class Transition extends Component {
    leave: HTMLElement;
    enter: HTMLElement;

    constructor(element: ComponentProps) {
        super(element);
        this.leave = this.getElement("leave") as HTMLElement;
        this.enter = this.getElement("enter") as HTMLElement;
    }

   show = () => {

        this.leave.classList.add("iter");
        setTimeout(() => {
            this.enter.style.transform = "translateY(0vh)";
            this.leave.classList.remove("iter");
            Array.from(this.enter.children).forEach(el => el.classList.add("trans"));
        }, 1000);

    };
    hide = () => {
        this.enter.style.transform = "translateY(150vh)";
        Array.from(this.enter.children).forEach(el => el.classList.remove("trans"));

    };

    destroy = () => {
        // Destroy functions
    };
}
