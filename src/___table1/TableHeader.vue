<script>
import { makeWeekKey } from './utils'
export default {
  props: {
    weeks: {
      type: Array,
      required: true
    },
    months: {
      type: Array,
      required: true
    },
    currentWeek: {
      type: String,
      required: true
    },
    selectedWeek: {
      type: [String, null],
      required: true
    }
  },
  emits: ['changeSelectedWeek', 'mouseLeaveFromHeaderWeek'],
  methods: {
    makeWeekKey
  }
}
</script>

<template>
  <div class="bg-[#151A1E] text-center sticky w-full left-0 top-0">
    <!-- months -->
    <div class="flex">
      <div
        v-for="month in months"
        :key="month"
        class="border-r border-[#556271] h-[20px] text-[10px] uppercase font-normal"
        :style="{ minWidth: 38 * 4 + 'px' }"
        colspan="4"
      >
        {{ month }}
      </div>
    </div>

    <!-- weeks -->
    <div class="flex">
      <div
        v-for="({ week, year }, weekIndex) in weeks"
        class="h-[20px] min-h-[20px] min-w-[38px] text-[12px] font-normal cursor-pointer"
        :class="{
          'border-r border-[#556271]': (weekIndex + 1) % 4 == 0,
          'bg-red-500': selectedWeek == makeWeekKey({ week, year }),
          'outline outline-red-500': currentWeek === makeWeekKey({ week, year })
        }"
        :key="makeWeekKey({ week, year })"
        @mouseover="$emit('changeSelectedWeek', makeWeekKey({ week, year }))"
        @mouseleave="$emit('mouseLeaveFromHeaderWeek')"
      >
        {{ week }}
      </div>
    </div>
  </div>
</template>
