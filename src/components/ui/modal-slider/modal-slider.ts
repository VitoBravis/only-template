import Component, { ComponentProps } from '@/base/component';
import Swiper, { Navigation, Pagination } from 'swiper';


export default class ModalSlider extends Component {
    swiper: Swiper
    value: HTMLElement
    count: number = 0;
    activeSlide: number = 0
    slides: Array<any>
    elements

    constructor(element: ComponentProps) {
        super(element);

        this.swiper = new Swiper('.swiper', {
            modules: [Navigation],
            direction: 'horizontal',
            loop: true,
            speed: 1000,
            spaceBetween: 100,

            preventClicks: false,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })

        this.value = document.querySelector('.modal-slider__value span') as HTMLElement
        this.slides = []
        this.elements = ([...document.querySelectorAll('.swiper-slide')]).slice(1, -1) // without duplicate and active slides


        this.elements.forEach(element => {
            this.slides.push({
                element,
                count: 0
            })
        });

        this.value.innerText = `${this.slides[this.activeSlide].count}`


        document.addEventListener('click', this.onClick)
    }


    onClick = (event: Event) => {
        const decrement = (<HTMLElement>event.target).closest('.modal-slider__decrement')
        const increment = (<HTMLElement>event.target).closest('.modal-slider__increment')

        const prev = (<HTMLElement>event.target).closest('.swiper-button-prev')
        const next = (<HTMLElement>event.target).closest('.swiper-button-next')

        this.value.innerText = `${this.slides[this.activeSlide].count}`

        if(prev || next) {
            this.activeSlide = this.swiper.realIndex
            this.value.innerText = `${this.slides[this.activeSlide].count}`

        }

        if(decrement) {
            this.slides[this.activeSlide].count--
            this.value.innerText = `${this.slides[this.activeSlide].count}`

        }
        if(increment) {
            this.slides[this.activeSlide].count++
            this.value.innerText = `${this.slides[this.activeSlide].count}`

        }
    }

    get getCount() {
        return this.slides[this.activeSlide].count
    }

    destroy = () => {
        // Destroy functions
    }
}
