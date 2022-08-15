import Component, { ComponentProps } from '@/base/component';


export default class HeaderNav extends Component {


    navItems: any;
    constructor(element: ComponentProps) {
        super(element);

        this.navItems = document.querySelectorAll('.nav__link')
        this.init(this.navItems)
       

    }

    init = (links = []) => {

        links.forEach((item, index) => {
            item.addEventListener('click', () => {
                item.classList.add('_active');

                links.forEach((item2, index2) => {
                    if (index2 != index) {
                        item2.classList.remove('_active')
                    }
                })

            })
        })

    }



    destroy = () => {
        // Destroy functions
    }
}
