import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);
        this.nRoot.addEventListener('click', this.clickHandler)

    }

    clickHandler = (e: Event) => {
        const spoilerContent = (<HTMLElement>e.target).closest('.title-spoiler')

        if(spoilerContent){

            spoilerContent.children[0].classList.toggle('open') // title
            spoilerContent.children[1].classList.toggle('active') // btn-close

            const spoiler = spoilerContent.parentElement?.children[1] as HTMLElement // Сделал так, чтобы при нажатии по тексту спойлер не закрывался

            if (spoiler.style.maxHeight) {
                spoiler.style.maxHeight = ''
            } else {
                spoiler.style.height = '100%'
                spoiler.style.maxHeight = `${spoiler.scrollHeight}px`
            }
        }
    }

    destroy = () => {
        // Destroy functions
    }
}
