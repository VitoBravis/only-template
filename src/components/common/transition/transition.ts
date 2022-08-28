import Component, { ComponentProps } from '@/base/component';

export default class Transition extends Component {

    transitionElements: HTMLElement[]
    transitionEnter: HTMLElement
    constructor(element: ComponentProps) {
        super(element);

        this.transitionEnter = this.getElement('enter')
        this.transitionElements = this.getElements(`out > div`);
    }

    hideAnim = () => {
        this.transitionEnter.classList.add('iter');
        this.transitionElements.forEach(element => {
            setTimeout(() => {

                element.classList.toggle('_hidden');
            }, 500)
        })
    }

    showAnim = () => {
        this.transitionEnter.classList.remove('iter');


        this.transitionElements.forEach(element => {


            element.classList.toggle('_hidden');

        })



    }
    destroy = () => {
        // Destroy functions
    }
}
