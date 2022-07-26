import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {

	collapse: HTMLElement;
	isOpen: boolean;

    constructor(element: ComponentProps) {
        super(element);
		  this.isOpen = false;
        this.collapse = this.getElement('collapse')!;
		  this.nRoot.addEventListener('click', this.clickHandler);
    }

	clickHandler = () => {
		this.isOpen ? this.close() : this.open()
    }

	 close = () => {
		this.isOpen = false;
		this.collapse.style.height = '0px'
	 }

	 open = () => {
		this.isOpen = true;
		this.collapse.style.height = `${this.collapse.scrollHeight}px`
	 }

	
}
