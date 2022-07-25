import Component, { ComponentProps } from '@/base/component';

export default class SpoilerItem extends Component {
    constructor(element: ComponentProps) {
        super(element);

        this.nRoot.addEventListener("click",(e)=> console.log(e.target)
        )
    }

    destroy = () => {
        // Destroy functions
    }
}
