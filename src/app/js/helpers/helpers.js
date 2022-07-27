"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchesBreakpoint = exports.setVhCssVariable = exports.isIe = exports.loadScript = exports.resize = exports.getComponents = exports.getComponent = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const variables_1 = require("@/variables/variables");
/**
 * @description Функция для поиска HTML-элемента и генерации объекта, который необходим конструктору класса Component
 * @param name - Имя css-класса корневого элемента
 * @param target - Элемент, внутри которого будет происходить поиск
 * @return Объект с именем и корневым HTML-элементом
 */
const getComponent = (name, target = document) => {
    return {
        name,
        component: target.querySelector(`.${name}`),
    };
};
exports.getComponent = getComponent;
/**
 * @description Функция для поиска массива HTML-элементов и генерации массива объектов, которые необходимы конструктору класса Component
 * @param name - Имя css-класса корневого элемента
 * @param target - Элемент, внутри которого будет происходить поиск
 * @return Массив объектов с именем и корневым HTML-элементом
 */
const getComponents = (name, target = document) => {
    return Array.from(target.querySelectorAll(`.${name}`)).map((component) => ({
        name,
        component,
    }));
};
exports.getComponents = getComponents;
/**
 * @description Подписка на событие resize окна браузера
 * @param callback - обработчик события resize (может быть функцией или объектом из двух функций, отдельно для десктоп и мобилки)
 * @param options - Дополнительные настройки для события resize ()
 */
const resize = (callback, options = {}) => {
    var _a, _b;
    options.debounce = (_a = options.debounce) !== null && _a !== void 0 ? _a : 300;
    options.breakpoint = (_b = options.breakpoint) !== null && _b !== void 0 ? _b : variables_1.BREAKPOINTS.LG;
    let resizeCallback;
    if ('call' in callback) {
        resizeCallback = () => callback(window);
    }
    else {
        resizeCallback = () => (0, exports.matchesBreakpoint)(options.breakpoint)
            ? callback.desktop(window)
            : callback.mobile(window);
    }
    if (options.initial)
        resizeCallback();
    return (0, rxjs_1.fromEvent)(window, 'resize')
        .pipe((0, operators_1.debounceTime)(options.debounce))
        .subscribe(resizeCallback);
};
exports.resize = resize;
/**
 * Добавляет сторонний скрипт на страницу и позволяет выполнить действие после его загрузки или в случае ошибки
 * @param src - расположение скрипта
 * @return Promise
 */
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        const injectedScript = document.querySelector(`script[src='${src}']`);
        if (injectedScript) {
            injectedScript.onload = resolve;
            injectedScript.onerror = reject;
            return;
        }
        const scriptElement = document.createElement('script');
        scriptElement.onload = resolve;
        scriptElement.onerror = reject;
        scriptElement.type = 'text/javascript';
        scriptElement.src = src;
        document.body.appendChild(scriptElement);
    });
};
exports.loadScript = loadScript;
/**
 * @description Проверка на Internet Explorer 11
 */
const isIe = () => {
    const agent = window.navigator.userAgent;
    const msie = agent.indexOf('MSIE ');
    return msie > -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
};
exports.isIe = isIe;
/**
 * @description Установка css-переменной --vh
 * @description Переменная --vh используется в основном в мобильных устройствах
 */
const setVhCssVariable = () => {
    const vh = document.documentElement.clientHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};
exports.setVhCssVariable = setVhCssVariable;
/**
 * @description Проверка размеров окна на соответствие указанному брейкпоинту
 * @param breakpoint
 */
const matchesBreakpoint = (breakpoint) => {
    return window.matchMedia(`(min-width: ${breakpoint}px)`).matches;
};
exports.matchesBreakpoint = matchesBreakpoint;
