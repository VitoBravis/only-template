"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("@/variables/variables");
const defaultObserveOptions = {
    rootMargin: '10px',
    threshold: [0, 0.0001, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    animateThreshold: 0
};
class Component {
    constructor({ name, component }) {
        this.getElement = (name) => {
            var _a;
            return (_a = this.nRoot.querySelector(`.${this.nRootName}__${name}`)) !== null && _a !== void 0 ? _a : undefined;
        };
        this.getElements = (name) => {
            return Array.from(this.nRoot.querySelectorAll(`.${this.nRootName}__${name}`));
        };
        this.observe = (target = this.nRoot, options = defaultObserveOptions) => {
            if (variables_1.REDUCE_MOTION) {
                this.onIntersection();
                return;
            }
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(({ intersectionRatio }) => {
                    if (intersectionRatio > options.animateThreshold) {
                        this.onIntersection();
                        observer.disconnect();
                    }
                });
            }, options);
            observer.observe(target);
        };
        this.onIntersection = () => {
            this.nRoot.classList.add('animate');
        };
        this.destroy = () => {
        };
        if (!component)
            throw new Error('Отсутствует корневой элемент');
        this.nRoot = component;
        this.nRootName = name;
    }
}
exports.default = Component;
