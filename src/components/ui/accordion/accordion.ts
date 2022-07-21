import Component, { ComponentProps } from '@/base/component';

export default class Accordion extends Component {
    constructor(element: ComponentProps) {
        super(element);

        this.nRoot.addEventListener('click', this.clickHandler)
    }

    clickHandler = (e: Event) => {
        const accordionElement = (<HTMLElement>e.target).closest('.accordion__element')
        if(accordionElement){
            const accordionTitleHead = accordionElement.children[0].children[0] as HTMLElement
            const accordionCollapse = accordionElement.children[1] as HTMLElement
            accordionTitleHead.classList.toggle("active");
            if(accordionTitleHead.classList.contains("active")){
            accordionCollapse.style.maxHeight = `${accordionCollapse.scrollHeight}px`
            } else{
                accordionCollapse.style.maxHeight = '0px'
            }
        }
    }
}
