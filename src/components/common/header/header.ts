import Component, { ComponentProps } from '@/base/component';
import { getComponent } from "@/helpers/helpers";
import Navbar from "@/components/common/navbar/navbar";

export default class Header extends Component {
    navbar: Navbar | undefined;

    constructor(element: ComponentProps) {
        super(element);

        const navbarEl = getComponent('navbar');
        this.navbar = new Navbar(navbarEl);
    }

    destroy = () => {};
}
