import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);

        this.nRoot.addEventListener("click",this.onHandleToggler
        )
    }

    onHandleToggler = (e:any) => {
        e.target.closest(".spoiler-item").children[1].children[0].classList.toggle("item-text__active")
        e.target.closest(".spoiler-item").children[0].children[1].children[0].classList.toggle("close__active")
    }

    destroy = () => {
        // Destroy functions
    }
}
