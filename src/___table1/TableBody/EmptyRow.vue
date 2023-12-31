<script>
export default {
  props: {
    weeks: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div
    v-for="(week, index) in weeks"
    class="min-w-[38px] h-[38px]"
    :class="{
      'border-r border-[#556271]': (index + 1) % 4 == 0
    }"
    :key="week"
  />
</template>
