import Component, { ComponentProps } from '@/base/component';
import Spoiler from "@/components/ui/spoiler/spoiler";
import { getComponents } from "@/helpers/helpers";

export default class Spoilers extends Component {
    private readonly spoilers: WeakMap<Element, Spoiler>;

    constructor(element: ComponentProps) {
        super(element);

        this.spoilers = new WeakMap();

        const rawSpoilers = getComponents('spoiler', this.nRoot);

        for (const rawSpoiler of rawSpoilers) {
            const spoiler = new Spoiler(rawSpoiler);
            const header = spoiler.getHeader();

            if (header !== null) {
                this.spoilers.set(header, spoiler);
            }
        }

        this.nRoot.addEventListener('click', this.onClick);
    }

    private onClick = (e: MouseEvent): void => {
        if (e.target instanceof Element) {
            const header = e.target.closest('.spoiler__header');

            if (header !== null) {
                const spoiler = this.spoilers.get(header);

                if (spoiler !== undefined) {
                    spoiler.toggle();
                }
            }
        }
    };

    destroy = () => {
        this.nRoot.removeEventListener('click', this.onClick);
    }
}
