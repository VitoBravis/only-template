import Component, { ComponentProps } from '@/base/component';

export default class Preloader extends Component {
    constructor(element: ComponentProps) {
        super(element);
    }

    hide = () => {
        this.nRoot.classList.add('preloader_hidden');
    }

    show = () => {
        this.nRoot.classList.remove('preloader_hidden');
    }

    destroy = () => {
        // Destroy functions
    }
}
