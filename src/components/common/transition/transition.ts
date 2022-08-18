import Component, { ComponentProps } from '@/base/component';

export default class Transition extends Component {

    transitionEnter: HTMLElement
    transitionOut: HTMLElement
    transitionElements: HTMLElement[]

    constructor(element: ComponentProps) {
        super(element);

        this.transitionEnter = this.getElement('enter') as HTMLElement
        this.transitionOut = this.getElement('out') as HTMLElement
        this.transitionElements = this.getElements(`out > div`)
    }

    enter = () => {
        console.log('enter 1');
        this.transitionEnter.classList.remove('iter')

        this.transitionElements.forEach(element => {
            console.log('hide');
            element.classList.toggle('hidden')
        })

        console.log('enter 2');

    }

    leave = () => {
        console.log('leave 1');

        this.transitionEnter.classList.add('iter')
        setTimeout(() => {
            console.log('leave 2');

            this.transitionElements.forEach(element => {
                element.classList.toggle('hidden')
            })
        }, 1000)
    }

    destroy = () => {
        // Destroy functions
    }
}
