import Component, { ComponentProps } from '@/base/component';
import { stringify } from 'querystring';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);

        
        this.nRoot.children[1].addEventListener('click', this.handlerClick)
    }


    handlerClick = (e: Event) => {

        const spoilers = document.querySelectorAll('[data-spoilers]');
      

        let content;
        spoilers.forEach(element => {
            content = element.children[1];
            this.spollerBody(element,content);

        });

    }
    spollerBody(spoilersItem: any, content:any) {
        
        if (spoilersItem.classList.contains('_active')) {
            spoilersItem.classList.remove('_active');
           
            content.style.maxHeight ='0'
            console.log(content)
         


        } else {
            spoilersItem.classList.add('_active')
           
            content.style.maxHeight = `${content.scrollHeight}px`
            


        }


    }


    destroy = () => {
        // Destroy functions
    }
}
