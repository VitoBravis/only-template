"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REDUCE_MOTION = exports.BREAKPOINTS = void 0;
exports.BREAKPOINTS = {
    XS: 375,
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    XXL: 1440,
    FHD: 1920,
};
exports.REDUCE_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
