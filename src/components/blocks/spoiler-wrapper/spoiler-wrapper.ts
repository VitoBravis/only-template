import Component, { ComponentProps } from '@/base/component';
import Spoiler from "@/components/ui/spoiler/spoiler";
import { getComponents } from "@/helpers/helpers";

export default class SpoilerWrapper extends Component {
    spoilerElements: Array<ComponentProps>;
    spoilers: Array<Spoiler>;
    opened: Spoiler | null = null;

    constructor(element: ComponentProps) {
        super(element);

        this.spoilerElements = getComponents('spoiler', this.nRoot);
        this.spoilers = this.spoilerElements.map((spoiler: ComponentProps<HTMLElement>) => new Spoiler(spoiler));
        this.nRoot.addEventListener('click', this.clickHandler);
    }

    clickHandler = (e: Event) => {
        this.spoilers.some((spoiler: Spoiler) => {
            if (spoiler.headElement?.contains(e.target as Node)) {
                !spoiler.isOpen ? this.openSpoiler(spoiler) : this.closeSpoiler(spoiler);
                return true;
            }
        })
    }

    /**
     * @description Ручка, открывающая спойлер из списка дочерних спойлеров данного контейнера
     * @param spoiler - Объект спойлера
     */
    openSpoiler(spoiler: Spoiler) {
        if (this.opened) this.closeSpoiler(this.opened);
        spoiler.open();
        this.opened = spoiler;
    }
    /**
     * @description Ручка, закрывающая спойлер из списка дочерних спойлеров данного контейнера
     * @param spoiler - Объект спойлера
     */
    closeSpoiler(spoiler: Spoiler) {
        spoiler.close();
        this.opened = null;
    }

    destroy = () => {
        // Destroy functions
    }
}
