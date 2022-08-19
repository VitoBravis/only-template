import Component, { ComponentProps } from "@/base/component";

export default class Header extends Component {
    links: HTMLElement[];
    constructor(element: ComponentProps) {
        super(element);

        this.links = this.getElements("link");
    }

    update = () => {
        this.links.forEach((link) => {
            if (location.pathname === link.getAttribute("href"))
                link.classList.add("active");
            else link.classList.remove("active");
        });
    };
}
