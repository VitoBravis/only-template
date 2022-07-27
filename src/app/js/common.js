"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/stable");
require("../scss/common.scss");
const core_1 = __importDefault(require("@barba/core"));
const prefetch_1 = __importDefault(require("@barba/prefetch"));
const index_1 = __importDefault(require("@/pages/index/index"));
const helpers_1 = require("@/helpers/helpers");
// SVG
const requireAll = (r) => r.keys().forEach(r);
requireAll(require.context("../../assets/icons", true, /\.svg$/));
(0, helpers_1.setVhCssVariable)();
(0, helpers_1.resize)(helpers_1.setVhCssVariable);
core_1.default.use(prefetch_1.default);
core_1.default.hooks.beforeEnter((_data) => { });
core_1.default.hooks.afterEnter((_data) => { });
core_1.default.hooks.before((_data) => { });
core_1.default.init({
    timeout: 500000,
    prefetchIgnore: "/bitrix",
    prevent: ({ el }) => { var _a; return ((_a = el === null || el === void 0 ? void 0 : el.id) === null || _a === void 0 ? void 0 : _a.indexOf("bx")) !== -1 || (el === null || el === void 0 ? void 0 : el.classList.contains("no-barba")); },
    views: [index_1.default],
    requestError: () => false,
});
