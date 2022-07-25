import Component, { ComponentProps } from '@/base/component';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);

        this.getNum();

        const spoiles = document.querySelectorAll('.spoiler');
        for (let elem of spoiles) {
            elem.addEventListener('click', this.clickHandler)
        }

    }

    clickHandler = (e: Event) => {
        const spoilerElement = (<HTMLElement>e.target).closest('.spoiler__element');
        if (spoilerElement) {
            const spoilerCollapse = spoilerElement.children[1] as HTMLElement;
            if (spoilerCollapse.style.height == '0px' || spoilerCollapse.style.height == '') {
                spoilerCollapse.style.height = `${spoilerCollapse.scrollHeight}px`;
                spoilerElement.classList.add('spoiler__element__open')
            } else {
                spoilerCollapse.style.height = '0px';
                spoilerElement.classList.remove('spoiler__element__open')
            }
        }
    }

    getNum = () => {
        const spoilerHeadTitle = document.querySelectorAll('.spoiler__head-title');
        let count = 1;
        for (let elem of spoilerHeadTitle) {
            elem.setAttribute('data-count', count++ + '.')
        }
    }
}
