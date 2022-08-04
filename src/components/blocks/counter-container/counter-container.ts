import Component, { ComponentProps } from '@/base/component';

export default class CounterContainer extends Component {
    constructor(element: ComponentProps) {
        super(element);
        this.nRoot.addEventListener("click", this.onToggleModal) 
    }

    onToggleModal = (e: any) => {
        if (e.target.classList.contains("button-counter")) {
            const modal = document.querySelector(".modal")
            modal?.classList.toggle("modal__active")
        }

    }

    destroy = () => {
        // Destroy functions
    }
}
