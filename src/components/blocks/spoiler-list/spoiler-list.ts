import Component, { ComponentProps } from '@/base/component';
import Spoiler from '@/components/ui/spoiler/spoiler';
import { getComponents } from '@/helpers/helpers';

export default class SpoilerList extends Component {
    spoilers: Spoiler[];

    constructor(element: ComponentProps) {
        super(element);

        this.spoilers = getComponents('spoiler', this.nRoot).map((spoiler) => new Spoiler(spoiler)); 

        this.nRoot.addEventListener('click', this.clickHandler);
    }

    clickHandler = (eve) => {
        this.spoilers.some((spoiler) => {
            if(spoiler.spoilerTitle.contains(eve.target)) {
                spoiler.isOpen ? spoiler.close() : spoiler.open();
                return true
            }
        })
    }


}
