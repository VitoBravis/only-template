import Component, { ComponentProps } from "@/base/component";
import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { getComponents } from "@/helpers/helpers";
import Counter from "@/components/ui/counter/counter";

export default class Slider extends Component {
    swiper: Swiper;
    counters: Counter[];
    activeCounter: Counter;

    constructor(props: ComponentProps) {
        super(props);
        this.counters = getComponents("counter", this.nRoot).map((counter) => new Counter(counter));
        this.activeCounter = this.counters[0] as Counter;
        this.swiper = new Swiper(this.nRoot, {
            modules: [Navigation],
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });
        this.swiper.on("slideChange", this.onSlideChange);
    }

    onSlideChange = () => {
        this.setActiveCounter(this.counters[this.swiper.activeIndex]);
    };
    setActiveCounter = (counter: Counter) => {
        this.activeCounter = counter;
    };
    getActiveCounter = () => {
        return this.activeCounter;
    };

}
