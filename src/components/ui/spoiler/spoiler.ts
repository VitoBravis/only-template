import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);
        this.nRoot.addEventListener('click', this.handleClick)
    }

    handleClick = (e: Event) => {
        const spoilerCollapse: HTMLElement = (<HTMLElement>e.target).closest('.spoiler')!;
        spoilerCollapse.classList.toggle('active');
    }

    destroy = () => {
        // Destroy functions
    }
}
