import Component, {ComponentProps} from '@/base/component';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);
        const spoilers = document.querySelectorAll('.spoiler')
        spoilers.forEach(spoiler => {
            spoiler.addEventListener('click', this.handleClick)
        })
    }

    handleClick = (e: Event) => {
        const el = e.currentTarget as HTMLElement;
        const text = el.querySelector('.spoiler__text') as HTMLElement || null;

        if (text) {
            const height = text?.scrollHeight;
            el.classList.add('spoiler--active')
            if (!text.style.height) {
                text.style.height = `${height}px`;
            } else {
                el.classList.remove('spoiler--active')
                text.style.height = '';
            }

        }
    }

    destroy = () => {
        // Destroy functions
    }
}
