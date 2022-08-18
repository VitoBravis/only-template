import Component, { ComponentProps } from "@/base/component";

export default class Header extends Component {
    links: HTMLElement[];
    constructor(element: ComponentProps) {
        super(element);

        this.links = this.getElements("link");

        this.nRoot.addEventListener("click", this.clickHandler);
    }

    clickHandler = (e: any) => {
        e.preventDefault();
        const headerLink = e.target.closest(".header__link");
        if (!headerLink) return;
        if (!headerLink.classList.contains("active")) {
            this.removeAllActive(e);
            headerLink.classList.add("active");
        }
    };

    removeAllActive = (e: any) => {
        this.links.map((link) => {
            link.classList.remove("active");
        });
    };
}
