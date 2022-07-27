import Component, { ComponentProps } from '@/base/component';
import Spoiler from "@/components/ui/spoiler/spoiler";
import { getComponents } from "@/helpers/helpers";

export default class Spoilers extends Component {
    private readonly spoilers: WeakMap<Element, Spoiler>;
    private readonly openSpoilers: Set<Spoiler>;

    constructor(element: ComponentProps) {
        super(element);

        this.spoilers = new WeakMap();
        this.openSpoilers = new Set();

        const rawSpoilers = getComponents('spoiler', this.nRoot);

        for (const rawSpoiler of rawSpoilers) {
            const spoiler = new Spoiler(rawSpoiler);
            const header = spoiler.getHeader();

            if (header !== null) {
                this.spoilers.set(header, spoiler);
            }
        }

        this.nRoot.addEventListener('click', this.onClick);
        window.addEventListener('resize', this.onResize);
    }

    private onClick = (e: MouseEvent): void => {
        if (e.target instanceof Element) {
            const header = e.target.closest('.spoiler__header');

            if (header !== null) {
                const spoiler = this.spoilers.get(header);

                if (spoiler !== undefined) {
                    const isOpen = spoiler.toggle();

                    if (isOpen) {
                        this.openSpoilers.add(spoiler);
                    } else {
                        this.openSpoilers.delete(spoiler);
                    }
                }
            }
        }
    };

    private onResize = (): void => {
        // "Переоткрываем" каждый открытый спойлер, чтобы обновить высоту тела
        for (const spoiler of this.openSpoilers) {
            spoiler.open();
        }
    };

    destroy = () => {
        this.nRoot.removeEventListener('click', this.onClick);
        window.removeEventListener('resize', this.onResize);
    }
}
