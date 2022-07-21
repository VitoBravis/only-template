import Component, {ComponentProps} from '@/base/component';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);

        this.nRoot.addEventListener('click', this.clickHandler)
    }

    clickHandler = (e: Event) => {
        const spoilerElement = (<HTMLElement>e.target).closest('.spoiler__element')
        if (!spoilerElement) return
        const spoilerBtn = spoilerElement.children[0] as HTMLElement
        const spoilerCollapse = spoilerElement.children[1] as HTMLElement
        if (spoilerBtn.classList.contains('active')) {
            spoilerBtn.classList.remove('active')
        } else {
            spoilerBtn.classList.add('active')
        }
        if (spoilerCollapse.style.height) {
            spoilerCollapse.style.height = '';
        } else {
            spoilerCollapse.style.height = `${spoilerCollapse.scrollHeight}px`
        }

    }
}
