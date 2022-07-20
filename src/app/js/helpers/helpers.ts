import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { BREAKPOINTS } from '@/variables/variables';
import {ComponentProps} from "@/base/component";
import {ResizeCallback, ResizeOptions} from "../../types";

/**
 * @description Функция для поиска HTML-элемента и генерации объекта, который необходим конструктору класса Component
 * @param name - Имя css-класса корневого элемента
 * @param target - Элемент, внутри которого будет происходить поиск
 * @return Объект с именем и корневым HTML-элементом
 */
export const getComponent = <T extends HTMLElement>(
    name: string,
    target: Document | HTMLElement = document
): ComponentProps<T> => {
    return {
        name,
        component: target.querySelector<T>(`.${name}`),
    }
};

/**
 * @description Функция для поиска массива HTML-элементов и генерации массива объектов, которые необходимы конструктору класса Component
 * @param name - Имя css-класса корневого элемента
 * @param target - Элемент, внутри которого будет происходить поиск
 * @return Массив объектов с именем и корневым HTML-элементом
 */
export const getComponents = <T extends HTMLElement>(
    name: string,
    target: Document | HTMLElement = document
): ComponentProps<T>[] => {
    return Array.from(target.querySelectorAll<T>(`.${name}`)).map((component) => ({
        name,
        component,
    }));
}

/**
 * @description Подписка на событие resize окна браузера
 * @param callback - обработчик события resize (может быть функцией или объектом из двух функций, отдельно для десктоп и мобилки)
 * @param options - Дополнительные настройки для события resize ()
 */

export const resize = (callback: ResizeCallback, options: ResizeOptions = {}) => {
    options.debounce = options.debounce ?? 300;
    options.breakpoint = options.breakpoint ?? BREAKPOINTS.LG;
    let resizeCallback: VoidFunction;
    if ('call' in callback) {
        resizeCallback = () => callback(window);
    } else {
        resizeCallback = () => matchesBreakpoint(options.breakpoint!)
            ? callback.desktop(window)
            : callback.mobile(window);
    }
    if (options.initial) resizeCallback();
    return fromEvent(window, 'resize')
        .pipe(debounceTime(options.debounce))
        .subscribe(resizeCallback);
}

/**
 * Добавляет сторонний скрипт на страницу и позволяет выполнить действие после его загрузки или в случае ошибки
 * @param src - расположение скрипта
 * @return Promise
 */
export const loadScript = (src: string) => {
    return new Promise((resolve, reject) => {
        const injectedScript = document.querySelector(`script[src='${src}']`) as HTMLScriptElement;
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
}

/**
 * @description Проверка на Internet Explorer 11
 */
export const isIe = () => {
    const agent = window.navigator.userAgent;
    const msie = agent.indexOf('MSIE ');

    return msie > -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
};

/**
 * @description Установка css-переменной --vh
 * @description Переменная --vh используется в основном в мобильных устройствах
 */
export const setVhCssVariable = (): void => {
    const vh = document.documentElement.clientHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

/**
 * @description Проверка размеров окна на соответствие указанному брейкпоинту
 * @param breakpoint
 */
export const matchesBreakpoint = (breakpoint: number) => {
    return window.matchMedia(`(min-width: ${breakpoint}px)`).matches;
}
