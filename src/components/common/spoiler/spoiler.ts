import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);
		  this.nRoot.addEventListener('click', this.clickHandler);
		  
    }

	clickHandler = (e: Event) => {
		
		const spoiler = (<HTMLElement>e.target)
		const parent = <HTMLElement>spoiler.parentNode
		const id = parseInt(parent.dataset.spoiler)

		const allSpoilers = document.querySelectorAll('[data-spoiler]')
		const aciveSpoiler = allSpoilers[id]

		console.log(aciveSpoiler)

        if (spoiler) {

			const collapse = aciveSpoiler.querySelector('.spoiler__collapse') as HTMLElement
			const icon = aciveSpoiler.querySelector('.spoiler__head-icon') as HTMLElement

			if (aciveSpoiler.classList.contains('active')) {
				aciveSpoiler.classList.remove('active')
				collapse.style.height = '0px'
			} else {
				// allSpoilers.forEach(item => item.classList.remove('active'))
				aciveSpoiler.classList.add('active')
				collapse.style.height = `${collapse.scrollHeight}px`
			}

		  }
    }

	
}
