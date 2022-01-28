<template>
  <div class="w-full min-h-screen flex justify-center text-primary-black bg-[#F3F7FA]">
    <div class="max-w-screen-lg w-full mx-1">
      <div class="w-full flex justify-center p-5">
        <img src="/Logo.svg" alt="">
      </div>
      <div class="w-full flex">
        <TransferModeSelector
            @transferModeChange="onTransferModeChange($event)"
        ></TransferModeSelector>
        <div class="w-full m-2">
          <SortModeSelector
              @sortModeChange="onSortModeChange($event)"
          ></SortModeSelector>
          <FlightList :tickets="ticketsToShow"></FlightList>
          <button
              v-if="filteredTickets.length"
              @click="addFiveTicketsToShow()"
              class="w-full bg-primary-blue text-white cursor-pointer rounded-md p-5 font-semibold mb-5"
          >Показать еще 5 билетов!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import TransferModeSelector from './components/TransferModeSelector.vue'
import SortModeSelector from './components/SortModeSelector.vue'
import FlightList from './components/FlightList.vue'
import {ITransferModeOption} from "./models/TransferModeOptions";
import {SortModes} from "./models/SortModeOptions";
import BackendService from "./services/BackendService";
import {ITicket} from "./models/ITicket";

export default defineComponent({
  name: 'AppComponent',
  data: () => ({
    backendService: new BackendService(),
    tickets: [] as ITicket[],
    filteredTickets: [] as ITicket[],
    ticketsToShow: [] as ITicket[],
    sortMode: SortModes.CHEAP,
  }),
  components: {
    TransferModeSelector,
    SortModeSelector,
    FlightList
  },
  async mounted() {
    this.tickets = await this.backendService.getTickets();
    this.filteredTickets = [...this.tickets];
    this.addFiveTicketsToShow();
  },
  methods: {
    onTransferModeChange($event: ITransferModeOption[]) {
      this.ticketsToShow = [];
      if ($event[0].selected) {
        this.filteredTickets = [...this.tickets];
        this.addFiveTicketsToShow();
        return;
      }
      this.filteredTickets = [];
      for (let i = 1; i < $event.length; i++) {
        if ($event[i].selected) {
          this.filteredTickets = [...this.filteredTickets, ...this.tickets
              .filter(t => t.segments[0].stops.length === $event[i].value)];
        }
      }
      this.onSortModeChange(this.sortMode);
      this.addFiveTicketsToShow();
    },
    onSortModeChange($event: SortModes) {
      this.sortMode = $event;
      this.ticketsToShow = [];
      switch ($event) {
        case SortModes.CHEAP:
          this.filteredTickets = this.filteredTickets.sort((a, b) => a.price - b.price);
          break;
        case SortModes.FAST:
          this.filteredTickets = this.filteredTickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
          break;
      }
      this.addFiveTicketsToShow();
    },
    addFiveTicketsToShow() {
      this.ticketsToShow = this.filteredTickets.slice(0, this.ticketsToShow.length + 5);
    }
  }
})
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
}
</style>
