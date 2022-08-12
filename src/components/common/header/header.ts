import Component, { ComponentProps } from "@/base/component";

export default class Header extends Component {
    link: HTMLAnchorElement[];

    constructor(element: ComponentProps) {
        super(element);
        this.link = this.getElements("navbar-link") as HTMLAnchorElement[];
    }

    destroy = () => {
    };
}
