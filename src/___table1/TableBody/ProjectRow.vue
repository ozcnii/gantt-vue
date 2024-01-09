<script>
export default {
  props: {
    progress: {
      type: Array,
      required: true
    }
  }
}
</script>
<template>
  <div
    v-for="({ value, week, year }, progressIndex) in progress"
    class="text-white min-h-[38px] min-w-[38px] flex items-center"
    :class="{ 'border-r border-[#556271]': (progressIndex + 1) % 4 == 0 }"
    :key="week"
  >
    <!-- @mouseover="selectedWeek = week" -->
    <div
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
