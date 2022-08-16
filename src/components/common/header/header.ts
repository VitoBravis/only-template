import Component, { ComponentProps } from '@/base/component';

export default class Header extends Component {
    links: HTMLElement[];

    constructor(element: ComponentProps) {
        super(element);

        this.links = this.getElements('link');
        this.links.forEach((item, i) => {
            item.addEventListener('click', () => {
                item.classList.add('active');

                this.links.forEach((link, j) => {
                    if (j != i) {
                        link.classList.remove('active');
                    }
                })
            })
        })
    }

    destroy = () => {};
}
