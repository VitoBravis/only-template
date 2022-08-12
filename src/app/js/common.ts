import "core-js/stable";
import "../scss/common.scss";
import barba from "@barba/core";
import barbaPrefetch from "@barba/prefetch";
import common from "@/pages/index/index";
import { getComponent, resize, setVhCssVariable } from "@/helpers/helpers";
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer/footer";
import { ITransitionData } from "@barba/core/dist/core/src/defs";
import Transition from "@/components/common/transition/transition";

// SVG
const requireAll = (r: __WebpackModuleApi.RequireContext) => r.keys().forEach(r);
requireAll(require.context("../../assets/icons", true, /\.svg$/));

setVhCssVariable();
resize(setVhCssVariable);

export const header = new Header(getComponent("header"));
export const footer = new Footer(getComponent("footer"));
const transition = new Transition(getComponent("transition"));


barba.use(barbaPrefetch);

barba.hooks.beforeEnter((_data) => {
});

barba.hooks.afterEnter((_data) => {
    header.link.forEach(link => {
        if (location.href === link.href) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

barba.hooks.before((_data) => {
});


barba.init({
    timeout: 500000,
    prefetchIgnore: "/bitrix",
    prevent: ({ el }) => el?.id?.indexOf("bx") !== -1 || el?.classList.contains("no-barba"),
    views: [common],
    requestError: () => false,
    transitions: [
        {
            name: "default-transition",
            leave(data: ITransitionData) {
                transition.show();
            },
            enter(data: ITransitionData) {

                setTimeout(() => {
                    transition.hide();
                }, 2000);


                // await pageOut(data.current.container)
            }
        }
    ]
});
