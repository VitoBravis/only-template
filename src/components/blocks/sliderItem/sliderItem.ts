import Component, { ComponentProps } from '@/base/component';
import Counter from '@/components/ui/counter/counter';
import { getComponents } from '@/helpers/helpers';

export default class SliderItem extends Component {
    counter: Counter
    constructor(element: ComponentProps) {
        super(element);

        this.counter = getComponents('counter');
        for (const item of  this.counter) {
            new Counter(item);

        }
    }

    destroy = () => {
        // Destroy functions
    }
}
