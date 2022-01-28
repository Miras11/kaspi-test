export class SortModeOptions {
    options: ISortModeOption[];

    constructor() {
        this.options = [
            {
                label: 'Самый дешевый',
                value: SortModes.CHEAP,
            },
            {
                label: 'Самый быстрый',
                value: SortModes.FAST,
            },
            {
                label: 'Оптимальный',
                value: SortModes.OPTIMAL,
            },
        ];
    }
}

export interface ISortModeOption {
    label: string,
    value: SortModes,
}

export enum SortModes {
    CHEAP,
    FAST,
    OPTIMAL,
}