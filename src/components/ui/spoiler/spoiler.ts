import Component, {ComponentProps} from '@/base/component';


export default class Spoiler extends Component {

    button: HTMLElement | undefined
    title: HTMLElement | undefined

    constructor(element: ComponentProps) {
        super(element);

        this.button = this.getElement('button')
        this.title = this.getElement('title') as HTMLElement

        this.button?.addEventListener('click', this.makeHandleClick(this.title))

    }

    makeHandleClick = (title: HTMLElement | undefined) => (e: Event) => {
        const el = e.currentTarget as HTMLElement
        el.classList.toggle('active')

        const spoilerContent = el?.parentElement?.nextElementSibling as HTMLElement

        if (!spoilerContent) {
            return
        }

        if (spoilerContent.style.maxHeight) {
            spoilerContent.style.maxHeight = ''
            el.style.transform = 'rotate(0)'
            title && (title.style.color = '#012B34')
        } else {
            spoilerContent.style.maxHeight = spoilerContent.scrollHeight + 'px'
            el.style.transform = 'rotate(45deg)'
            el.style.transition = '0.2s'
            title && (title.style.color = '#02818A')
        }

        if (el.classList.contains('active')) {
            spoilerContent.classList.add('active')
        } else {
            spoilerContent.classList.remove('active')

        }
    }

    destroy = () => {
        this.button?.removeEventListener('click', this.makeHandleClick(this.title))
    }
}
