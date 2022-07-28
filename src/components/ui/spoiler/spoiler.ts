import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {

    constructor(element: ComponentProps) {
        super(element);
        this.nRoot.children[0].addEventListener('click', this.clickHandler);        
    } 

    clickHandler = (e:Event) =>{
        const spoiler = (<HTMLElement>e.target).closest('.spoiler');
        if(!spoiler) return;

        spoiler.classList.toggle("is-open");
        const spoilerCollapse = spoiler.children[1] as HTMLElement;
        spoilerCollapse.style.height = spoiler.classList.contains('is-open') 
            ? `${spoilerCollapse.scrollHeight}px` 
            : spoilerCollapse.style.height = '0';
    }
}
