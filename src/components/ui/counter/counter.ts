import Component, { ComponentProps } from '@/base/component';

export default class Counter extends Component {
     btnDecrement = document.querySelector('.decrement');
     btnIncrement = document.querySelector('.increment');
     counterCount = document.querySelector('.counter__count');
     count: Number = 0;
    constructor(element: ComponentProps) {
        super(element);

        this.btnDecrement?.addEventListener('click', this.handleDecrement);
        this.btnIncrement?.addEventListener('click', this.handleIncrement);
        this.counterCount;
        this.count;
    }


    handleDecrement = (e: Event) => {
        e.preventDefault();

        this.count--;
        this.counterCount.textContent  =`${this.count}`;
        console.log(this.count)



    }
    handleIncrement = (e: Event) => {
        e.preventDefault();

        this.count++;
        this.counterCount.textContent  =`${this.count}`;
        console.log(this.count)


    }

    destroy = () => {
        // Destroy functions
    }
}
