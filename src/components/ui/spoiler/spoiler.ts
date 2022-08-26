import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {
    spoilerItems: HTMLElement[];

    constructor(element: ComponentProps) {
        super(element);
      

        
        this.spoilerItems = this.getElements('item');
        this.nRoot.addEventListener('click', this.handlerClick);
      

    }



    handlerClick = (e: Event) => {

        let content;
        this.spoilerItems.forEach(element => {
            if (element.contains(e.target) ) {

                content = element.children[1];
                this.spollerBody(element, content);
            }

        });

    }
    spollerBody(spoilersItem: any, content: any) {

        if (spoilersItem.classList.contains('_active')) {
            spoilersItem.classList.remove('_active');
            content.style.maxHeight = '0px'
        } else {
            spoilersItem.classList.add('_active')
            content.style.maxHeight = `${content.scrollHeight}px`

        }


    }


    destroy = () => {
        // Destroy functions
    }
}
