import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);

        this.nRoot.addEventListener("click",this.onHandleToggler
        )
    }

    onHandleToggler = (e: any) => {    
        
        const item =  e.target.closest(".spoiler-item")
        item.children[0].children[0].classList.toggle("spoiler-item__titleActive")
        item.children[1].classList.toggle("spoiler-item__textActive")
        if (item.children[1].children[0].style.maxHeight) {
            item.children[1].children[0].style.maxHeight= null
        } else {
            item.children[1].children[0].style.maxHeight =  e.target.closest(".spoiler-item").children[1].children[0].scrollHeight + 'px'
        }
        item.children[0].children[1].children[0].classList.toggle("close__active")
    }

    destroy = () => {
        // Destroy functions
    }
}
