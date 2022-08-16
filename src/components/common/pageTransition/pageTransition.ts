import Component, { ComponentProps } from "@/base/component";

export default class PageTransition extends Component {
    static readonly appearTimeMS: number = 1000;
    static readonly disappearTimeMS: number = 2000;
    top: HTMLElement;
    bottom: HTMLElement;
    overlay: HTMLElement;

    constructor(element: ComponentProps) {
        super(element);
        this.overlay = this.getElement("overlay")!;
        this.top = this.getElement("top")!;
        this.bottom = this.getElement("bottom")!;
    }

    leavePage = () => {
        requestAnimationFrame(() => {
            this.nRoot.style.visibility = "visible";
            this.nRoot.style.transition = "none";
            this.overlay.style.height = "100%";
            this.top.style.transition = "none";
            this.bottom.style.transition = "none";
        });

        setTimeout(() => {
            requestAnimationFrame(() => {
                this.overlay.style.height = "0";
                this.top.style.height = "50%";
                this.bottom.style.height = "50%";
            });
        }, PageTransition.appearTimeMS);
    };

    enterPage = () => {
        setTimeout(() => {
            requestAnimationFrame(() => {
                this.nRoot.style.transition = ".3s ease-in";
                this.top.style.transition = "1s ease-in";
                this.bottom.style.transition = "1s ease-in";
                this.top.style.height = "0";
                this.bottom.style.height = "0";
            });
        }, 500);

        setTimeout(() => {
            this.nRoot.style.visibility = "hidden";
        }, PageTransition.disappearTimeMS);
    };

    once = () => {
        this.nRoot.style.visibility = "visible";
        this.overlay.style.height = "100%";

        setTimeout(() => {
            this.overlay.style.height = "0";
        }, PageTransition.appearTimeMS);

        setTimeout(() => {
            this.nRoot.style.visibility = "hidden";
        }, PageTransition.disappearTimeMS);
    };

    getTransitionTime = () => {
        return PageTransition.appearTimeMS;
    };

    destroy = () => {
        // Destroy functions
    };
}
