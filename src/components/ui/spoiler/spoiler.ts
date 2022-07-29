import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);
        this.nRoot.addEventListener('click', this.handleClick)
    }

    handleClick = (e: Event) => {
        const spoiler: HTMLElement = (<HTMLElement>e.target).closest('.spoiler')!,
            spoilerCollapse: HTMLElement = spoiler.querySelector('.spoiler__collapse')!;

        spoiler.classList.toggle('active');

        spoilerCollapse.style.maxHeight = spoiler.classList.contains('active')
            ? `${spoilerCollapse.scrollHeight}px`
            : `0px`;
    }

    destroy = () => {
        // Destroy functions
    }
}
