<template>
  <div
    v-for="({ value, week, year, dismissWeek, isDissmissedWeak }, progressIndex) in progress"
    class="text-white min-h-[38px] min-w-[38px]"
    :class="{
      'border-r border-[#556271]': (progressIndex + 1) % 4 == 0
    }"
    :key="makeWeekKey({ week, year })"
    @click="openEditPanel(makeWeekKey({ week, year }))"
  >
    <!-- dismissed-item -->
    <div
      v-if="isDissmissedWeak"
      class="border-b border-[#556271] h-full w-full flex items-center justify-center"
      :class="{
        'bg-[#151A1E]': dismissWeek <= makeWeekKey({ week, year })
      }"
    >
      <div v-if="dismissWeek === makeWeekKey({ week, year })" class="text-[#556271] font-bold">
        x
      </div>
      <div v-else />
    </div>

    <!-- EMPTY_VALUE -->
    <div v-else-if="value === EMPTY_VALUE" class="border-b h-full border-[#556271]" />

    <!-- default-item -->
    <div
      v-else
      class="border-b border-[#556271] h-full w-full flex items-center justify-center"
      :class="{
        'bg-[#69C7FF]': value && value < 80,
        'bg-[#0296EC]': value && value >= 80 && value <= 94,
        'bg-[#014870]': value && value >= 95,
        'bg-transparent': makeWeekKey({ week, year }) == selectedWeek,
        'cursor-pointer hover:opacity-60': currentWeek <= makeWeekKey({ week, year }),
        'cursor-not-allowed': currentWeek > makeWeekKey({ week, year })
      }"
    >
      {{ value || '—' }}
    </div>
  </div>
</template>

<script>
import { makeWeekKey, EMPTY_VALUE } from '../utils'

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
  computed: {
    EMPTY_VALUE() {
      return EMPTY_VALUE
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
