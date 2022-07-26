import Component, {ComponentProps} from '@/base/component';

type HandlersMap = Record<number, (event: Event) => void | undefined>

export default class Spoiler extends Component {
    buttons
    handlersMap: HandlersMap = {} as HandlersMap

    constructor(element: ComponentProps) {
        super(element);

        this.buttons = document.querySelectorAll('.open-button')
        const titles = document.querySelectorAll('h3')

        this.buttons.forEach((button, index) => {
            this.handlersMap[index] = this.makeHandleClick(titles[index])
            button.addEventListener('click', this.handlersMap[index])
        })
    }

    makeHandleClick = (title: HTMLElement) => (e: Event) => {
        const el = e.currentTarget as HTMLElement
        el.classList.toggle('active')

        let spoilerContent = el?.parentElement?.nextElementSibling as HTMLElement
        if (!spoilerContent) {
            return
        }

        if (spoilerContent.style.maxHeight) {
            spoilerContent.style.maxHeight = ''
            el.style.transform = 'rotate(0)'
            title.style.color = '#012B34'
        } else {
            spoilerContent.style.maxHeight = spoilerContent.scrollHeight + 'px'
            el.style.transform = 'rotate(45deg)'
            el.style.transition = '0.2s'
            title.style.color = '#02818A'
        }
        if (el.classList.contains('active')) {
            spoilerContent.classList.add('active')
        } else {
            spoilerContent.classList.remove('active')

        }
    }

    destroy = () => {
        this.buttons.forEach((button, index) => {
            this.handlersMap[index] && button.removeEventListener('click', this.handlersMap[index])
        })
    }
}
