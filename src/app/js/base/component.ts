import { REDUCE_MOTION } from '@/variables/variables';

export type ComponentProps<T = HTMLElement> = {
    name: string;
    component: T | null;
};

export interface ComponentObserveOptions extends  IntersectionObserverInit {
    animateThreshold?: number;
}

const defaultObserveOptions: ComponentObserveOptions = {
    rootMargin: '10px',
    threshold: [0, 0.0001, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    animateThreshold: 0
}

abstract class Component {
    public nRoot: HTMLElement;
    public nRootName: string;

    protected constructor({name, component}: ComponentProps) {
        if (!component) throw new Error('Отсутствует корневой элемент');

        this.nRoot = component;
        this.nRootName = name;
    }

    public getElement = <T extends HTMLElement>(name: string): T | undefined => {
        return this.nRoot.querySelector<T>(`.${this.nRootName}__${name}`) ?? undefined;
    };

    public getElements = <T extends HTMLElement>(name: string): T[] => {
        return Array.from(this.nRoot.querySelectorAll(`.${this.nRootName}__${name}`));
    };

    public observe = (target = this.nRoot, options = defaultObserveOptions) => {
        if (REDUCE_MOTION) {
            this.onIntersection();
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(({intersectionRatio}) => {
                    if (intersectionRatio > options.animateThreshold!) {
                        this.onIntersection();
                        observer.disconnect();
                    }
                });
            },
            options,
        );

        observer.observe(target);
    };

    public onIntersection = () => {
        this.nRoot.classList.add('animate');
    };

    public destroy = () => {

    };
}

export default Component;
