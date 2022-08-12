import Component, { ComponentProps } from '@/base/component';

export default class PageTransition extends Component {
    top: HTMLElement;
    bottom: HTMLElement;
    overlay: HTMLElement;

    constructor(element: ComponentProps) {
        super(element);
        this.overlay = this.getElement('overlay')!;
        this.top = this.getElement('top')!;
        this.bottom = this.getElement('bottom')!;
    }

    leavePage = () => {
        this.nRoot.style.zIndex = '50';
        this.nRoot.style.transition = 'none';
        this.nRoot.style.backgroundColor = '#FFFFFF';
        this.overlay.style.height = '100%';
        this.top.style.transition = 'none';
        this.bottom.style.transition = 'none';

        setTimeout(()=> {
            this.overlay.style.height = '0';
            this.top.style.height = '50%';
            this.bottom.style.height = '50%';
        },1200);
    }

    enterPage = () => {
        setTimeout(()=> {
            this.nRoot.style.transition = '.3s ease-in';
            this.top.style.transition = '1s ease-in';
            this.bottom.style.transition = '1s ease-in';
            this.top.style.height = '0';
            this.bottom.style.height = '0';
        }, 1500);

        setTimeout(()=> {
            this.nRoot.style.backgroundColor = 'none';
            this.nRoot.style.zIndex = '-1';    
        }, 2200);
    }

    once = () => {
        this.nRoot.style.zIndex = '50';
        this.nRoot.style.backgroundColor = '#FFFFFF';
        this.overlay.style.height = '100%';

        setTimeout(() => {
            this.overlay.style.height = '0';
        }, 1200)

        setTimeout(()=> {
            this.nRoot.style.backgroundColor = 'none';
            this.nRoot.style.zIndex = '-1';    
        }, 2200);
    }

    destroy = () => {
        // Destroy functions
    }
}
