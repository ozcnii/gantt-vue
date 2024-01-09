<script>
import { makeWeekKey } from '../utils'

export default {
  props: {
    progress: {
      type: Array,
      required: true
    },
    selectedWeek: {
      type: [String, null],
      required: true
    },
    currentWeek: {
      type: [String, null],
      required: true
    }
  },
  methods: {
    makeWeekKey,
    openEditPanel(weekKey) {
      if (this.currentWeek > weekKey) {
        return
      }
      console.log('openEditPanel week:', weekKey)
    }
  }
}
</script>

<template>
  <div
    v-for="({ value, week, year }, progressIndex) in progress"
    class="text-white min-h-[38px] min-w-[38px] flex items-center justify-center"
    :class="{
      'bg-transparent': makeWeekKey({ week, year }) == selectedWeek,
      'bg-[#69C7FF]': value && value < 80,
      'bg-[#0296EC]': value && value >= 80 && value <= 94,
      'bg-[#014870]': value && value >= 95,
      'border-r border-[#556271]': (progressIndex + 1) % 4 == 0,
      'bg-black': value === null,
      'cursor-pointer hover:opacity-60': currentWeek <= makeWeekKey({ week, year }),
      'cursor-not-allowed': currentWeek > makeWeekKey({ week, year })
    }"
    :key="makeWeekKey({ week, year })"
    @click="openEditPanel(makeWeekKey({ week, year }))"
  >
    {{ value || '-' }}
  </div>
</template>
