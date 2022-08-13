import "core-js/stable";
import "../scss/common.scss";
import barba from "@barba/core";
import barbaPrefetch from "@barba/prefetch";
import common from "@/pages/index/index";
import { getComponent, resize, setVhCssVariable } from "@/helpers/helpers";
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer/footer";
import PageTransition from "@/components/common/pageTransition/pageTransition";

// SVG
const requireAll = (r: __WebpackModuleApi.RequireContext) =>
    r.keys().forEach(r);
requireAll(require.context("../../assets/icons", true, /\.svg$/));

setVhCssVariable();
resize(setVhCssVariable);

export const header = new Header(getComponent("header"));
export const footer = new Footer(getComponent("footer"));
export const pageTransition = new PageTransition(getComponent("pageTransition"));
const TRANSITION_TIME = pageTransition.getTransitionTime();

barba.use(barbaPrefetch);

barba.hooks.beforeEnter((_data) => {});

barba.hooks.afterEnter((_data) => {});

barba.hooks.before((_data) => {});

barba.hooks.once(pageTransition.once())

function pageAnimIn(container: any) {
    pageTransition.leavePage();
}

function pageAnimOut(container: any) {
    pageTransition.enterPage();
}
barba.init({
    timeout: 500000,
    prefetchIgnore: "/bitrix",
    prevent: ({ el }) =>
        el?.id?.indexOf("bx") !== -1 || el?.classList.contains("no-barba"),
    views: [common],
    requestError: () => false,
    transitions: [
        {
            name: "base",

            leave(data) {
                pageAnimIn(data.current.container);
                return new Promise<void>((resolve) => setTimeout(resolve, TRANSITION_TIME));
            },
            enter(data) {
                pageAnimOut(data.next.container);
            },
        },
    ],
});
