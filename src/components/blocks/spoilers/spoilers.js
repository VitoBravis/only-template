"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = __importDefault(require("@/base/component"));
class Spoilers extends component_1.default {
    constructor(element) {
        super(element);
        this.destroy = () => {
            // Destroy functions
        };
        this.nRoot.addEventListener("click", this.spoilerClickHandler);
    }
    spoilerClickHandler(e) {
        if (e.target.parentElement.classList.contains("spoiler__collapse"))
            return;
        const spoilerElement = e.target.closest(".spoiler");
        if (!spoilerElement)
            return;
        const collapse = spoilerElement.children[1];
        const head = spoilerElement.children[0];
        if (!collapse.style.height) {
            head.classList.add("active");
            collapse.classList.add("active");
            collapse.style.cssText = `
                    height: ${collapse.scrollHeight}px;
                `;
            return;
        }
        head.classList.remove("active");
        collapse.classList.remove("active");
        collapse.style = "";
    }
}
exports.default = Spoilers;
