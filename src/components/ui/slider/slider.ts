import Component, { ComponentProps } from '@/base/component';
import { nextTick } from 'process';
import Swiper, { Navigation } from 'swiper';

export default class Slider extends Component {


  swiper: Swiper;

  constructor(element: ComponentProps) {
    super(element);
    this.swiper = new Swiper(".swiper", {
      modules: [Navigation],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },


    })
  }


  destroy = () => {
    // Destroy functions
  }
}
