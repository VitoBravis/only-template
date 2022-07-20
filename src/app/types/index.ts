export type ResizeCallback = ((e: Window) => void) | {
    desktop: (e: Window) => void;
    mobile: (e: Window) => void;
}

export type ResizeOptions = {
    debounce?: number;
    breakpoint?: number;
    initial?: boolean;
}
