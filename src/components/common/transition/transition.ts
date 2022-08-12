import Component, { ComponentProps } from '@/base/component';

export default class Transition extends Component {
    constructor(element: ComponentProps) {
        super(element);
    }

    hideAnim = () => {
        this.nRoot.classList.add('_hidden');
    }

    showAnim = () => {
        this.nRoot.classList.remove('_hidden');
    }
    destroy = () => {
        // Destroy functions
    }
}
