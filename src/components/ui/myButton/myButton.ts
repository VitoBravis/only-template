import Component, { ComponentProps } from '@/base/component';

export default class MyButton extends Component {

    constructor(element: ComponentProps) {
        super(element);

     
        this.nRoot.addEventListener('click', this.handleClick)
     


    }
   

    handleClick = (e: Event) => {
        alert(1);

    }
    destroy = () => {
        // Destroy functions
    }
}
