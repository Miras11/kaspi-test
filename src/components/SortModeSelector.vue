<template>
  <div class="mb-4 bg-white shadow-md rounded-md flex overflow-hidden">
    <div
        v-for="(option, index) in optionsList" v-bind:key="option.value"
        :class="[option.value === selectedOption ? activeElementClasses : null]"
        class="p-5 flex-auto flex justify-center font-semibold cursor-pointer
        border border-[#DFE5EC] first:rounded-l-md last:rounded-r-md"
        @click="optionClick(index)"
    >
      {{ option.label }}
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {ISortModeOption, SortModeOptions, SortModes} from "../models/SortModeOptions";

export default defineComponent({
  name: 'TransferModeSelector',
  data: () => ({
    optionsList: [] as ISortModeOption[],
    selectedOption: SortModes.CHEAP as SortModes,
    activeElementClasses: 'bg-primary-blue text-white',
  }),
  emits: {
    sortModeChange(selectedOption: SortModes): SortModes {
      return selectedOption;
    }
  },
  mounted() {
    this.optionsList = new SortModeOptions().options;
    this.selectedOption = this.optionsList[0].value;
    this.$emit('sortModeChange', this.selectedOption);
  },
  methods: {
    optionClick(index: number) {
      this.selectedOption = this.optionsList[index].value;
      this.$emit('sortModeChange', this.selectedOption);
    },
  }
})
</script>

<style scoped>

</style>