import Component, { ComponentProps } from '@/base/component';
import Swiper from 'swiper';

export default class Modal extends Component {
    swiper: any;

    constructor(element: ComponentProps) {
        super(element);

        this.swiper = new Swiper('.swiper', {
            loop: true,
            direction: 'horizontal',
            // If we need pagination
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          })!;
    }

    
}
