import Component, { ComponentProps } from '@/base/component';
import HeaderNav from '@/components/blocks/headerNav/headerNav';
import { getComponent } from '@/helpers/helpers';

export default class Header extends Component {

    navItems: any;
    headerNav: HeaderNav;
    constructor(element: ComponentProps) {
        super(element);
        this.navItems = document.querySelectorAll('.nav__link')
        this.headerNav = new HeaderNav(getComponent('headerNav'));т

    }
    updateLinksActive = () => {
        this.navItems.forEach(link => {
            location.pathname === link.getAttribute('href') ?
                link.classList.add('_active')
            :
                link.classList.remove('_active')
        });
    }



    destroy = () => { };
}
