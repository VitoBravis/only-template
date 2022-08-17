import Component, { ComponentProps } from '@/base/component';
import { getComponents } from "@/helpers/helpers";
import Counter from "@/components/ui/counter/counter";


import Swiper, { Navigation } from 'swiper';


export default class Slider extends Component {
    swiper: Swiper
    counters: Counter[]
    activeCounter: Counter

    constructor(element: ComponentProps) {
        super(element);

        this.swiper = new Swiper(this.nRoot, {
            modules: [Navigation],
            direction: 'horizontal',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
        this.swiper.on("slideChange", this.onSlideChange);

        this.counters = getComponents('counter', this.nRoot).map((counter) => new Counter(counter));
        this.activeCounter = this.counters[0]
    }

    onSlideChange = () => {
        this.activeCounter = this.counters[this.swiper.activeIndex]
    }

    getCounter = () => {
        return this.activeCounter
    }

    destroy = () => {
        // Destroy functions
    }
}