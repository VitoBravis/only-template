import Component, { ComponentProps } from "@/base/component";
import Counter from "@/components/ui/counter/counter";
import { getComponents } from "@/helpers/helpers";
import Swiper from "swiper";
import { Navigation } from "swiper";

export default class Modal extends Component {
    swiper: any;
    closeBtn: HTMLElement;
    value: number;
    textElement: HTMLElement | any;
    initialCounters: Counter[];

    constructor(element: ComponentProps, counterElement: HTMLElement) {
        super(element);
        this.closeBtn = this.getElement("button")!;
        this.textElement = counterElement;
        this.initialCounters = getComponents("counter", this.nRoot).map(
            (component) => new Counter(component)
        );
        this.value = 0;

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

        this.closeBtn.addEventListener("click", this.onClose);

        this.swiper.on("slideChange", () => {
            this.value = this.swiper.realIndex;
        });
    }

    onClose = (e: MouseEvent) => {
        e.preventDefault();
        this.setCounterValue();
        this.nRoot.classList.remove("active");
    };

    onOpen = () => {
        this.nRoot.classList.add("active");
    };

    setCounterValue = () => {
        if (this.textElement && this.initialCounters.length) {
            this.initialCounters.forEach((counter: any, i: number) => {
                if (i === this.value) {
                    this.textElement.textContent = counter.count;
                }
            });
        } else {
            this.textElement.textContent = "Нет счётчиков";
        }
    };

    destroy = () => {
        this.closeBtn.removeEventListener('click', this.onClose)
    }
}
