import 'core-js/stable';
import '../scss/common.scss';
import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import common from '@/pages/index/index';
import { getComponent, resize, setVhCssVariable } from '@/helpers/helpers';
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer/footer";
import Preloader from '@/components/common/preloader/preloader';
import Transition from '@/components/common/transition/transition';

// SVG
const requireAll = (r: __WebpackModuleApi.RequireContext) => r.keys().forEach(r);
requireAll(require.context('../../assets/icons', true, /\.svg$/));

setVhCssVariable();
resize(setVhCssVariable);

export const header = new Header(getComponent('header'));
export const footer = new Footer(getComponent('footer'));

const preloaderElem = getComponent('preloader');
let preloader: Preloader;

if (preloaderElem.component) {
    preloader = new Preloader(preloaderElem);
}

const transitionElem = getComponent('transition');
let transition: Transition;

if (transitionElem.component) {
    transition = new Transition(transitionElem);
}


barba.use(barbaPrefetch);

barba.hooks.beforeEnter((_data) => {
    header.update(_data?.next);
});

barba.hooks.afterEnter((_data) => { });

barba.hooks.before((_data) => { });

barba.init({
    timeout: 500000,
    prefetchIgnore: '/bitrix',
    prevent: ({ el }) => el?.id?.indexOf('bx') !== -1 || el?.classList.contains('no-barba'),
    views: [common],
    transitions: [
        {
            sync: true,
            once(data) {
                data.next.container.style.opacity = '1';
                preloader.hide();
            },
            leave(data) {
                data.current.container.style.opacity = '0';
                preloader.show();
                transition.show();
            },
            enter(data) {
                setTimeout(() => {
                    data.next.container.style.opacity = '1';
                    preloader.hide();
                    transition.hide();
                }, 1010);
            },
        }
    ],
    requestError: () => false
});
