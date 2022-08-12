import Component, { ComponentProps } from '@/base/component';

export default class Transition extends Component {
    constructor(element: ComponentProps) {
        super(element);
    }

    hide = () => {
        this.nRoot.classList.add('transition_hidden');
    }

    show = () => {
        this.nRoot.classList.remove('transition_hidden');
    }

    destroy = () => {
        // Destroy functions
    }
}
