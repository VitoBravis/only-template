import Component, { ComponentProps } from "@/base/component";
import Swiper from "swiper";
import { Navigation } from "swiper";

export default class Modal extends Component {
    swiper: any;
    closeBtn: HTMLElement;
    value: number;
    textElement: HTMLElement | any;
    initialCounters: any;

    constructor(
        element: ComponentProps,
        textElement?: HTMLElement,
        initialCounters?: any
    ) {
        super(element);

        this.closeBtn = this.getElement("button")!;
        this.textElement = textElement;
        this.initialCounters = initialCounters;
        this.swiper = new Swiper(".swiper", {
            modules: [Navigation],
            loop: true,
            direction: "horizontal",
            slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        })!;
        this.value = 0;

        this.closeBtn.addEventListener("click", this.onClose);

        this.swiper.on("slideChange", () => {
            this.value = this.swiper.realIndex;
        });
    }

    onClose = (e: MouseEvent) => {
        e.preventDefault();

        if (this.textElement && this.initialCounters) {
            this.initialCounters.forEach((counter: any, i: number) => {
                if (i === this.value) {
                    this.textElement.textContent = counter.count;
                }
            });
        }
        this.nRoot.classList.remove("active");
    };
}
