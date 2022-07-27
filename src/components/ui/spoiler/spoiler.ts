import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {
    private readonly header: HTMLElement | null;
    private readonly body: HTMLElement | null;

    constructor(element: ComponentProps) {
        super(element);

        this.header = this.getElement('header') ?? null;
        this.body = this.getElement('body') ?? null;

        this.close();
    }

    public getHeader(): HTMLElement | null {
        return this.header;
    }

    /** @return Открыт ли теперь спойлер */
    public toggle(): boolean {
        const isClosed = this.nRoot.classList.contains('is-closed')

        if (isClosed) {
            this.open();
        } else {
            this.close();
        }

        return isClosed;
    }

    public open(): void {
        if (this.body !== null) {
            this.body.style.maxHeight = `${this.body.scrollHeight}px`;
        }

        this.nRoot.classList.remove('is-closed');
    }

    public close(): void {
        this.nRoot.classList.add('is-closed');
    }
}
