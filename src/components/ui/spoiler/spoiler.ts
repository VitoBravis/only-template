import Component, { ComponentProps } from '@/base/component';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resize } from '../../../app/js/helpers/helpers';

export default class Spoiler extends Component {

    
    constructor(element: ComponentProps) {
        super(element);
        this.nRoot.addEventListener('click', this.clickHandler);        
    } 

    clickHandler = (e:Event) =>{
        const spoilerElement = (<HTMLElement>e.target).closest('.spoiler__element');
        if(!spoilerElement) return;

        spoilerElement.classList.toggle("is-open");
        const spoilerCollapse = spoilerElement.children[1] as HTMLElement;
        spoilerCollapse.style.height = spoilerElement.classList.contains('is-open') 
            ? `${spoilerCollapse.scrollHeight}px` 
            : spoilerCollapse.style.height = '0';
    }
}
