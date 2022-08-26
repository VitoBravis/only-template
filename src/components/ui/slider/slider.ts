import Component, { ComponentProps } from '@/base/component';
import SliderItem from '@/components/blocks/sliderItem/sliderItem';
import { getComponents } from '@/helpers/helpers';
import Swiper, { Keyboard, Navigation } from 'swiper';




export default class Slider extends Component {
  swiper: Swiper;
  sliderItems: any;
  swiperContainer: HTMLElement;


  constructor(element: ComponentProps) {
    super(element);

    this.swiperContainer = this.getElement('swiper-container');
    this.sliderItems = getComponents('sliderItem', this.nRoot)

    if (this.sliderItems.length) {
      for (const item of this.sliderItems) {
        new SliderItem(item);

      }
      this.swiper = new Swiper( this.swiperContainer, {
        modules: [Navigation, Keyboard],
        allowTouchMove: false,
        slidesPerView: 1,
        keyboard: {
          enabled: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
      })

    }

  }

  getActiveCounterValue = () => {
    return Number(
        this.swiper.$wrapperEl
            .children()
            [this.swiper.activeIndex].querySelector(".counter__count")
            ?.textContent
    );
};


  destroy = () => {
    // Destroy functions
  }
}
