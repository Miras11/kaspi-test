<template>
  <div class="w-96 m-2 bg-white shadow-md rounded-md pb-5 h-fit">
    <h3 class="font-semibold tracking-wide m-5">Количество пересадок</h3>
    <div v-for="(option, index) in optionsList" v-bind:key="option.value"
         class="flex items-center py-2 px-5 cursor-pointer"
         :class="{'bg-light-blue': option.selected}"
         @click="optionClick(index)"
    >
      <div class="w-[20px] h-[20px] rounded-[2px] border border-[#9ABBCE]"
           :class="{'border-[#9ABBCE]': !option.selected, 'border-primary-blue': option.selected}">
        <img src="/Check.svg" alt="" class="w-full h-full p-[3px]" v-show="option.selected">
      </div>
      <p class="ml-3">{{ option.label }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {ITransferModeOption, TransferModeOptions} from "../models/TransferModeOptions";

export default defineComponent({
  name: 'TransferModeSelector',
  data: () => ({
    optionsList: [] as ITransferModeOption[],
  }),
  emits: {
    transferModeChange(optionsList: ITransferModeOption[]): ITransferModeOption[] {
      return optionsList;
    }
  },
  mounted() {
    this.optionsList = new TransferModeOptions().options;
    this.$emit('transferModeChange', this.optionsList);

  },
  methods: {
    optionClick(index: number) {
      this.optionsList[index].selected = !this.optionsList[index].selected;
      this.$emit('transferModeChange', this.optionsList);
    },
  }
})
</script>

<style scoped>

</style>