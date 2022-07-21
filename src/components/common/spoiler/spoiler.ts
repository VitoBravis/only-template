import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);
		  this.nRoot.addEventListener('click', this.clickHandler);
		  
    }

	clickHandler = (e: Event) => {
		const spoiler = (<HTMLElement>e.target).closest('.spoiler__head')
		
        if (spoiler) {

			const collapse = document.querySelector('.spoiler__collapse') as HTMLElement
			const icon = document.querySelector('.spoiler__head-icon') as HTMLElement

			console.log(collapse.offsetHeight)

			if (icon.classList.contains('active')) {
				icon.classList.remove('active')
				collapse.style.height = '0px'
			} else {
				icon.classList.add('active')
				collapse.style.height = `${collapse.scrollHeight}px`
			}


			
			

			
			
			
		  }
    }

	
}
