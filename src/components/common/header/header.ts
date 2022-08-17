import Component, { ComponentProps } from '@/base/component';

export default class Header extends Component {

    link: HTMLElement[]

    constructor(element: ComponentProps) {
        super(element);

        this.link = this.getElements('navigation a');
    }

    destroy = () => { };
}
