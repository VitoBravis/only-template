import Component, { ComponentProps } from "@/base/component";

export default class Transition extends Component {
    leaveBlock: HTMLElement;
    enterTopBlock: HTMLElement;
    enterBottomBlock: HTMLElement;
    enterBlock: HTMLElement;
    constructor(element: ComponentProps) {
        super(element);

        this.leaveBlock = this.getElement("leave")!;

        this.enterBlock = this.getElement("enter")!;

        this.enterTopBlock = this.getElement("enter-top")!;

        this.enterBottomBlock = this.getElement("enter-bottom")!;
    }

    leave = () => {
        this.leaveBlock.classList.add("active");
        document.body.classList.toggle("lock");
        setTimeout(() => {
            this.leaveBlock.classList.remove("active");
        }, 1000);
    };

    enter = () => {
        this.enterBlock.classList.add("active");
        this.enterTopBlock.classList.add("active");
        this.enterBottomBlock.classList.add("active");
        setTimeout(() => {
            this.enterBlock.classList.remove("active");
            this.enterTopBlock.classList.remove("active");
            this.enterBottomBlock.classList.remove("active");
            document.body.classList.toggle("lock");
        }, 1000);
    };
}
