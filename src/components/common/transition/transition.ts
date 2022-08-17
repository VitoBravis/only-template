import Component, { ComponentProps } from '@/base/component';

export default class Transition extends Component {
    constructor(element: ComponentProps) {
        super(element);

        this.nRoot.addEventListener('click', this.toggleVisible)
    }


    toggleVisible = () => {
        this.nRoot.classList.toggle('hidden')
    }

    destroy = () => {
        // Destroy functions
    }
}
