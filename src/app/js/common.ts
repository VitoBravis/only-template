import "core-js/stable";
import "../scss/common.scss";
import barba from "@barba/core";
import barbaPrefetch from "@barba/prefetch";
import common from "@/pages/index/index";
import { getComponent, resize, setVhCssVariable } from "@/helpers/helpers";
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer/footer";
import Transition from "@/components/common/transition/transition";

const transition = new Transition(getComponent("transition"));

// SVG
const requireAll = (r: __WebpackModuleApi.RequireContext) =>
    r.keys().forEach(r);
requireAll(require.context("../../assets/icons", true, /\.svg$/));

setVhCssVariable();
resize(setVhCssVariable);

export const header = new Header(getComponent("header"));
export const footer = new Footer(getComponent("footer"));

barba.use(barbaPrefetch);

barba.hooks.beforeEnter((_data) => {});

barba.hooks.afterEnter((_data) => {
    header.update();
});

barba.hooks.before((_data) => {});

barba.init({
    timeout: 50000,
    prefetchIgnore: "/bitrix",
    prevent: ({ el }) =>
        el?.id?.indexOf("bx") !== -1 || el?.classList.contains("no-barba"),
    views: [common],
    requestError: () => false,
    transitions: [
        {
            name: "base",
            leave() {
                transition.leave();
                return new Promise((resolve) => setTimeout(resolve, 1000));
            },
            enter() {
                transition.enter();
            },
        },
    ],
});
