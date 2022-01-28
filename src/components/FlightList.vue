<template>
  <div class="mt">
    <div
        v-for="(ticket, index) in tickets" v-bind:key="index"
        class="bg-white shadow-md rounded-md p-5 mb-4"
    >
      <div class="flex justify-between mb-5">
        <div class="text-primary-blue font-semibold text-2xl"
        >{{ Math.floor(ticket.price / 1000) }} {{ ticket.price % 1000 }} Р
        </div>
        <img src="/S7 Logo.png" alt="">
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div>
          <div class="text-xs text-[#A0B0B9] font-semibold tracking-wide"
          >{{ ticket.segments[0].origin }} – {{ ticket.segments[0].destination }}
          </div>
          <div class="text-sm font-semibold"
          >{{ getDepartureDate(ticket.segments[0].date) }} –
            {{ getArrivalDate(ticket.segments[0].date, ticket.segments[0].duration) }}
          </div>
        </div>
        <div>
          <div class="text-xs text-[#A0B0B9] font-semibold"
          >В ПУТИ</div>
          <div class="text-sm font-semibold"
          >{{ minutesToFormattedStr(ticket.segments[0].duration) }}</div>
        </div>
        <div>
          <div class="text-xs text-[#A0B0B9] font-semibold"
          >ПЕРЕСАДКИ</div>
          <div class="text-sm font-semibold">
            <span v-for="(stop, stopIndex) in ticket.segments[0].stops"
            >{{stop + (stopIndex + 1 < ticket.segments[0].stops.length ? ', ' : '')}}</span>
            {{!ticket.segments[0].stops.length ? '-' : ''}}
          </div>
        </div>
        <div>
          <div class="text-xs text-[#A0B0B9] font-semibold"
          >{{ ticket.segments[1].origin }} – {{ ticket.segments[1].destination }}
          </div>
          <div class="text-sm font-semibold"
          >{{ getDepartureDate(ticket.segments[1].date) }} –
            {{ getArrivalDate(ticket.segments[1].date, ticket.segments[1].duration) }}
          </div>
        </div>
        <div>
          <div class="text-xs text-[#A0B0B9] font-semibold"
          >В ПУТИ</div>
          <div class="text-sm font-semibold"
          >{{ minutesToFormattedStr(ticket.segments[1].duration) }}</div>
        </div>
        <div>
          <div class="text-xs text-[#A0B0B9] font-semibold"
          >ПЕРЕСАДКИ</div>
          <div class="text-sm font-semibold">
            <span v-for="(stop, stopIndex) in ticket.segments[1].stops"
            >{{stop + (stopIndex + 1 < ticket.segments[1].stops.length ? ', ' : '')}}</span>
            {{!ticket.segments[1].stops.length ? '-' : ''}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {ITicket} from "../models/ITicket";

export default defineComponent({
  name: 'FlightList',
  props: {
    tickets: {type: [] as PropType<ITicket[]>},
  },
  methods: {
    parseDate(dateString: string): Date {
      return new Date(dateString);
    },
    toDateString(date: Date): string {
      return this.adZeroChar(date.getHours())
          + ':' + this.adZeroChar(date.getMinutes());
    },
    adZeroChar(val: number): string {
      return (val < 10 ? '0' : '') + val;
    },
    addMinutes(date: Date, minutes: number): Date {
      return new Date(date.getTime() + minutes * 60000);
    },
    getDepartureDate(dateString: string): string {
      return this.toDateString(this.parseDate(dateString));
    },
    getArrivalDate(dateString: string, minutes: number): string {
      return this.toDateString(this.addMinutes(this.parseDate(dateString), minutes));
    },
    minutesToFormattedStr(minutes: number): string {
      const hours = Math.floor(minutes / 60);
      const remainedMinutes = minutes % 60;
      return (hours ? hours + 'ч ' : '') + remainedMinutes + 'м';
    }
  }
})
</script>

<style scoped>

</style>