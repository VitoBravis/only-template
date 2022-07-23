import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);


        // this.nRoot.children[1].childNodes.forEach(el => {el.addEventListener('click', this.handlerClick);})

        this.nRoot.addEventListener('click', this.handlerClick);
    }



    handlerClick = (e: Event) => {


        const spoilers = document.querySelectorAll('.spoiler__item');
        const btn = (<HTMLElement>e.target);


        console.log(btn)



        let content;
        spoilers.forEach(element => {
            if (element === btn.closest('.spoiler__item' ) || element === btn.closest('.spoiler__btn') || element === btn.closest('.spoiler__item-title')) {

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
