import Component, {ComponentProps} from '@/base/component';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element)
        this.nRoot.addEventListener('click', this.clickHandler)
    }

    clickHandler = (e: Event) => {
        const spoilerElement = (<HTMLElement>e.target).closest('.spoiler__btn')
        if(!spoilerElement) return

        const textBlock = spoilerElement.nextElementSibling as HTMLElement

        if(!textBlock.classList.contains('is-active')) {
            spoilerElement.classList.toggle('is-active')
            textBlock.style.height ? textBlock.style.height = '0' : textBlock.style.height = `${textBlock.scrollHeight}px`
        }
    }
}
