<script>
import { EMPTY_VALUE, DISABLED_VALUE } from '../utils'

export default {
  props: {
    progress: {
      type: Array,
      required: true
    }
  },
  computed: {
    EMPTY_VALUE() {
      return EMPTY_VALUE
    },
    DISABLED_VALUE() {
      return DISABLED_VALUE
    }
  }
}
</script>
<template>
  <div
    v-for="({ value, week, year }, progressIndex) in progress"
    class="border-b border-[#556271] text-white min-h-[38px] min-w-[38px] flex items-center"
    :class="{ 'border-r': (progressIndex + 1) % 4 == 0 }"
    :key="week"
  >
    <div v-if="value === EMPTY_VALUE" />
    <div v-else-if="value === DISABLED_VALUE" class="bg-[#556271] w-full h-[6px]" />
    <div
      v-else
      class="h-[6px] w-full"
      :class="{
        'bg-red-500': value && value < 40,
        'bg-yellow-500': value && value > 39 && value < 70,
        'bg-green-500': value && value > 69,
        'bg-slate-500': value === null
      }"
    />
  </div>
</template>
