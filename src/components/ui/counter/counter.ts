import Component, { ComponentProps } from "@/base/component";

export default class Counter extends Component {
    value: Element | null;

    constructor(element: ComponentProps) {
        super(element);
        this.nRoot.addEventListener("click", this.clickHandler);
        this.value = this.nRoot.querySelector(".counter__value");
    }

    clickHandler = (e: Event) => {
        const target = e.target;
        let value = Number(this.getValue());
        if ((<HTMLElement>target).closest(".button__slider")) {
            if ((<HTMLElement>target).classList.contains("plus")) {
                value++;
            } else {
                --value;
            }
            this.setValue(String(value));
        }
    };

    setValue = (value: string) => {
        this.value!.textContent = value;
    };
    getValue = () => {
        return this.value!.textContent;
    };
    destroy =  () =>{
        this.nRoot.removeEventListener("click", this.clickHandler)
    }
}
