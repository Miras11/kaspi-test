export class TransferModeOptions {
    options: ITransferModeOption[];

    constructor() {
        this.options = [
            {
                label: 'Все',
                value: TransferModes.ALL,
                selected: true,
            },
            {
                label: 'Без пересадок',
                value: TransferModes.ZERO,
                selected: false,
            },
            {
                label: '1 пересадка',
                value: TransferModes.ONE,
                selected: false,
            },
            {
                label: '2 пересадки',
                value: TransferModes.TWO,
                selected: false,
            },
            {
                label: '3 пересадки',
                value: TransferModes.THREE,
                selected: false,
            },
        ];
    }
}

export interface ITransferModeOption {
    label: string,
    value: TransferModes,
    selected: boolean,
}

export enum TransferModes {
    ALL = -1,
    ZERO,
    ONE,
    TWO,
    THREE,
}