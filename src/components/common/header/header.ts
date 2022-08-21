import Component, { ComponentProps } from "@/base/component";
import { header } from "../../../app/js/common";

export default class Header extends Component {
    link: HTMLAnchorElement[];

    constructor(element: ComponentProps) {
        super(element);
        this.link = this.getElements("navbar-link") as HTMLAnchorElement[];
    }
    update=()=> {
        header.link.forEach(link => {
            if (location.href === link.href) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    destroy = () => {
    };
}
