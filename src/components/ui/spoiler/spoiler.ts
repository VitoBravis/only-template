import Component, { ComponentProps } from "@/base/component";
import { getComponent, getComponents } from "@/helpers/helpers";
import SpoilerItem from "../spoiler-item/spoiler-item";

interface ISpoilers {
    [key: string]: SpoilerItem;
}

export default class Spoiler extends Component {
    spoilers: ISpoilers = {};

    constructor(element: ComponentProps) {
        super(element);

        if (getComponent("spoiler-item", this.nRoot)) {
            getComponents("spoiler-item", this.nRoot)
                .map((item) => new SpoilerItem(item))
                .forEach((spoiler) => {
                    const id = spoiler.id;
                    if (id) {
                        this.spoilers[id] = spoiler;
                    }
                });
        }
        this.handleClick = this.handleClick.bind(this);
        this.nRoot.addEventListener("click", this.handleClick);
    }

    handleClick(e: Event) {
        const { target } = e;

        if (target) {
            const element =
                (<HTMLElement>target).closest(".spoiler-item") ?? null;

            if (element) {
                const activeSpoilerId = (<HTMLElement>element).dataset.id;

                if (activeSpoilerId) {
                    const activeSpoiler = this.spoilers[activeSpoilerId];

                    if (activeSpoiler) {
                        activeSpoiler.isOpen
                            ? activeSpoiler.close()
                            : activeSpoiler.open();
                    }
                }
            }
        }
    }

    destroy = () => {
        // Destroy functions
        this.nRoot.removeEventListener("click", this.handleClick);
    };
}
