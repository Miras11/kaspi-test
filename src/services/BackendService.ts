import axios from "axios";
import {ITicket} from "../models/ITicket";
import {ITicketsDTO} from "../models/ITicketsDTO";

export default class BackendService {
    backendUrl = 'http://localhost:1234';

    public async getTickets(): Promise<ITicket[]> {
        const searchId = await this.getSearchId();
        const tickets = [] as ITicket[];
        while (true) {
            const ticketsChunk = await this.getTicketsChunk(searchId);
            if (!ticketsChunk) {
                continue;
            }
            ticketsChunk.tickets.forEach(t => tickets.push(t));
            if (ticketsChunk.stop) {
                break;
            }
        }
        return tickets;
    }

    private async getSearchId(): Promise<string> {
        return (await axios.get(this.backendUrl + '/search')).data.searchId;
    }

    private async getTicketsChunk(searchId: string): Promise<ITicketsDTO | undefined> {
        try {
            return (await axios.get(this.backendUrl + '/tickets', {
                params: {searchId}
            })).data;
        } catch (ignore) {
        }
    }
}