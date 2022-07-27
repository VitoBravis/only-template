import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {

    spoilerTitle: HTMLElement;
    spoilerContent: HTMLElement;
    isOpen: boolean

    constructor(element: ComponentProps) {
        super(element);

        this.spoilerContent = this.getElement('content');
        this.spoilerTitle = this.getElement('title');
        this.isOpen = false;
    }

    /*clickHandler = (e: Event) => {
        console.log(this.spoilerContent)
        this.spoilerTitle.classList.toggle('spoiler__title_open');
        
        if(this.isOpen) {
            this.spoilerContent.style.height = '0';
        } else {this.spoilerContent.style.height = `${this.spoilerContent.scrollHeight}px`};



    }*/

    open = () => {
        this.isOpen = true;
        this.spoilerTitle.classList.add('spoiler__title_open');
        this.spoilerContent.style.height = `${this.spoilerContent.scrollHeight}px`;
    }

    close = () => {
        this.isOpen = false;
        this.spoilerTitle.classList.remove('spoiler__title_open');
        this.spoilerContent.style.height = '0';
    } 
    
}
