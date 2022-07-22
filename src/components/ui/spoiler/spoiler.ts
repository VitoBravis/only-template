import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);

        this.nRoot.addEventListener('click', this.clickHandler);
    }

    clickHandler = (e: Event) => {
        const spoilerTitle = this.nRoot.firstElementChild as HTMLElement
        const spoilerText = this.nRoot.children[1] as HTMLElement
        const isOpen = spoilerTitle.classList.contains('spoiler__title_open');

        spoilerTitle.classList.toggle('spoiler__title_open');
        
        if(isOpen) {
            spoilerText.style.height = '0';
        } else {spoilerText.style.height = `${spoilerText.scrollHeight}px`};



    }

    
}
