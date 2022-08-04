import Component, {ComponentProps} from '@/base/component';
import Swiper, {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default class Slider extends Component {
    constructor(element: ComponentProps) {
        super(element);
        new Swiper('.slider', {
            modules: [Navigation],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }
}
