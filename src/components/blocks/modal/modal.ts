import Component, { ComponentProps } from '@/base/component';

export default class Modal extends Component {
    constructor(element: ComponentProps) {
        super(element);
        this.nRoot.addEventListener("click",this.onHandleToggler
        )
    }

    numberCounter:any = document.querySelector(".counter-wrapper__span")
    next = document.querySelector(".swiper-button-next") 
    prev = document.querySelector(".swiper-button-prev")
    plus = document.querySelector(".swiper-btn-next") 
    minus = document.querySelector(".swiper-btn-prev")

    onHandleToggler = (e: any) => {    
        
        if (e.target === this.next || e.target === this.prev || e.target === this.plus || e.target === this.minus || e.target.classList.contains("svg")) {
            this.numberCounter.textContent  = document.querySelector(".swiper-pagination-bullet-active")?.textContent
        }
    }

    destroy = () => {
        // Destroy functions
    }
}
