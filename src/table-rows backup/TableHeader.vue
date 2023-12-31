<script>
export default {
  emits: ['changeSelectedWeek'],
  props: { selectedWeek: [Number, null] },
  data() {
    return {
      currentWeek: 20
    }
  }
}
</script>

<template>
  <div class="bg-[#151A1E] h-[40px] flex text-xs">
    <div class="min-w-[354px]"></div>
    <div>
      <div class="flex items-center uppercase h-[20px]">
        <div
          v-for="month in 12"
          :key="month"
          class="h-[20px] w-[152px] flex justify-center border-r border-r-[#556271]"
        >
          {{ month }} 2023
        </div>
      </div>
      <div class="flex items-center h-[20px]">
        <div
          v-for="i in 48"
          :key="i"
          class="w-[38px] h-[20px] flex justify-center"
          @mouseover="$emit('changeSelectedWeek', i)"
          :class="{
            'bg-red-500': i == selectedWeek,
            'border-r border-r-[#556271]': i % 4 == 0,
            'outline outline-red-500': currentWeek == i
          }"
        >
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>
