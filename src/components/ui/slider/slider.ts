import Component, { ComponentProps } from "@/base/component";
import { getComponent, getComponents } from "@/helpers/helpers";
import Swiper, { Navigation } from "swiper";
import SliderCounter from "@/components/ui/slider-counter/slider-counter";
import { watchedState } from "@/pages/index";

export default class Slider extends Component {
    swiper: Swiper;
    map: any;

    constructor(element: ComponentProps) {
        super(element);

        this.swiper = new Swiper(".swiper", {
            modules: [Navigation],
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        this.map = new Map();

        this.swiper.on("slideChange", () => {
            watchedState.counter.activeSlide = this.swiper.realIndex;
        });

        if (getComponent("slider-counter", this.nRoot).component) {
            getComponents("slider-counter", this.nRoot).map((item) => {
                this.map.set(new SliderCounter(item), 0);
            });
            watchedState.counter.mainCount = this.map;
        }
    }
}
