<script>
export default {
  emits: ['changeSelectedWeek'],
  props: {
    selectedWeek: {
      type: [String, null],
      required: true
    },
    weeks: {
      type: Array,
      required: true
    },
    months: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // TODO: 30ой недели нет!!
      currentWeek: `31-2023` //30
    }
  },
  methods: {
    makeKey({ week, year }) {
      return `${week}-${year}`
    }
  }
}
</script>

<template>
  <div class="h-[40px] flex text-xs relative">
    <div
      class="sticky bg-[#151A1E] left-0 top-0 h-[40px] min-w-[354px] flex justify-end p-[10px] text-base"
    ></div>

    <div class="bg-[#151A1E]">
      <div class="flex items-center uppercase h-[20px]">
        <div
          v-for="month in months"
          :key="month"
          class="h-[20px] w-[152px] flex justify-center border-r border-r-[#556271] text-[10px]"
        >
          {{ month }}
        </div>
      </div>

      <div class="flex items-center h-[20px]">
        <!-- TODO: (..48,49,50,0,1,2...,49,50,0,1,2..) -->
        <div
          v-for="({ week, year }, index) in weeks"
          :key="index"
          class="w-[38px] h-[20px] flex justify-center cursor-pointer"
          @mouseover="$emit('changeSelectedWeek', makeKey({ week, year }))"
          :class="{
            'bg-red-500': makeKey({ week, year }) === selectedWeek,
            'border-r border-r-[#556271]': (index + 1) % 4 == 0,
            'outline outline-red-500': currentWeek === makeKey({ week, year })
          }"
        >
          {{ week }}
        </div>
      </div>
    </div>
  </div>
</template>
