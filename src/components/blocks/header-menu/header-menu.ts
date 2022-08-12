import Component, { ComponentProps } from '@/base/component';

export default class HeaderMenu extends Component {
    private _path: string;
    items: HTMLAnchorElement[];

    constructor(element: ComponentProps) {
        super(element);

        this._path = '/';
        this.items = this.getElements<HTMLAnchorElement>('link');
    }

    get path() {
        return this._path;
    }

    set path(path) {
        if (path === this._path) return;

        this._path = path;

        this.deactivateAll();
        this.setActiveItem();
    }

    private deactivateAll = () => {
        this.items.forEach((item) => item.classList.remove('header-menu__link_active'));
    };

    private setActiveItem = () => {
        this.items.forEach((item) => {
            if (item.pathname === this._path) {
                item.classList.add('header-menu__link_active');
            }
        });
    }

    destroy = () => {
        // Destroy functions
    }
}
