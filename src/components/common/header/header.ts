import Component, { ComponentProps } from '@/base/component';

export default class Header extends Component {

    link: HTMLElement[]

    constructor(element: ComponentProps) {
        super(element);
        this.link = this.getElements('navigation a');
    }

    update = () => {
        this.link.forEach(link => {
            location.pathname === link.getAttribute('href') ?
                link.classList.add('active')
            :
                link.classList.remove('active')
        });
    }

    destroy = () => { };
}
