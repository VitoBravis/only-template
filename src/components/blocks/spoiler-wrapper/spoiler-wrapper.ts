import Component, { ComponentProps } from '@/base/component';
import Spoiler from "@/components/ui/spoiler/spoiler";
import { getComponents, resize } from "@/helpers/helpers";
import { fromEvent, Subscription } from "rxjs";

export default class SpoilerWrapper extends Component {
    spoilerElements: Array<ComponentProps>;
    spoilers: Array<Spoiler>;
    opened: Spoiler | null = null;
    onResize: Subscription | undefined;

    constructor(element: ComponentProps) {
        super(element);

        this.spoilerElements = getComponents('spoiler', this.nRoot);
        this.spoilers = this.spoilerElements.map((spoiler: ComponentProps<HTMLElement>) =>
            new Spoiler(spoiler)
        );
        fromEvent(this.nRoot, 'click').subscribe(this.clickHandler)

        this.onResize = resize(() => {
            if(this.opened) this.opened.setCollapseHeight(this.opened.getScrollHeight());
        });
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
        // this.nRoot.removeEventListener('click', this.clickHandler);
        this.onResize?.unsubscribe()
        this.spoilers.forEach((spoiler) => spoiler.destroy());
    }
}
