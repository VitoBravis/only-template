import Component, { ComponentProps } from '@/base/component';
import { getComponent } from '@/helpers/helpers';
import { ISchemaPage } from '@barba/core';

import HeaderMenu from '@/components/blocks/header-menu/header-menu';

export default class Header extends Component {
    headerMenuElem: ComponentProps<HTMLElement>;
    headerMenu?: HeaderMenu;

    constructor(element: ComponentProps) {
        super(element);

        this.headerMenuElem = getComponent('header-menu');
        if (this.headerMenuElem.component) {
            this.headerMenu = new HeaderMenu(this.headerMenuElem);
        }
    }

    update = (next: ISchemaPage | undefined) => {
        if (this.headerMenu && next) {
            this.headerMenu.path = next.url.path as string;
        }
    }

    destroy = () => { };
}
