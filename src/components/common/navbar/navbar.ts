import Component, { ComponentProps } from '@/base/component';
import { fromEvent } from "rxjs";

export default class Navbar extends Component {
    links: Array<HTMLLinkElement> | undefined;
    current: HTMLLinkElement | null = null;

    constructor(element: ComponentProps) {
        super(element);

        this.links = this.getElements('link');
        fromEvent(this.nRoot, 'click').subscribe(this.onClick)
        this.init();
    }

    init() {
        this.links?.some(link => {
            if (link.href === window.location.href) {
                this.setCurrent(link);
            }
        })
    }

    onClick = (e: Event) => {
        const target = e.target as HTMLLinkElement;
        this.links?.some((link: HTMLLinkElement) => {
            if (link.href === target.href) {
                this.setCurrent(link);
            }
        })
    }

    setCurrent = (link: HTMLLinkElement) => {
        this.current?.classList.remove('navbar__link_current');
        this.current = link;
        this.current.classList.add('navbar__link_current');
    }

    destroy = () => {
        // Destroy functions
    }
}
