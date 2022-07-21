import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);
		  this.nRoot.addEventListener('click', this.clickHandler);
		  
    }

	clickHandler = (e: Event) => {
		
		const spoiler = <HTMLElement>e.target
		const parent = <HTMLElement>spoiler.closest('.spoiler')
		const id = parseInt(parent.dataset.spoiler)
		const allSpoilers = document.querySelectorAll('[data-spoiler]')
		const aciveSpoiler = allSpoilers[id]


        if (spoiler) {

			const collapse = aciveSpoiler.querySelector('.spoiler__collapse') as HTMLElement


			if (aciveSpoiler.classList.contains('active')) {
				aciveSpoiler.classList.remove('active')
				collapse.style.height = '0px'
			} else {
				aciveSpoiler.classList.add('active')
				collapse.style.height = `${collapse.scrollHeight}px`
			}

		  }
    }

	
}
