import Component, { ComponentProps } from "@/base/component";
import { getComponents } from "@/helpers/helpers";
import Spoiler from "../spoiler/spoiler";

export default class SpoilersList extends Component {
    spoilers: Spoiler[];

    constructor(element: ComponentProps) {
        super(element);

        // Поиск и инициализация всех спойлеров внутри элемента this.nRoot
        this.spoilers = getComponents("spoiler", this.nRoot).map(
            (spoiler) => new Spoiler(spoiler)
        );

        this.nRoot.addEventListener("click", this.clickHandler);
    }

    clickHandler = (e: any) => {
        this.spoilers.some((spoiler) => {
            if (spoiler.controlElement.contains(e.target)) {
                spoiler.isOpen ? spoiler.close() : spoiler.open();
                return true;
            }
        });
    };
}
