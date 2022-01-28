import {ITicket} from "./ITicket";

export interface ITicketsDTO {
    stop: boolean;
    tickets: ITicket[];
}