<script>
export default {
  emits: ['changeSelectedWeek'],
  props: { selectedWeek: [Number, null] },
  data() {
    return {
      isOpen: true,
      users: ['ПИСЬКА ТАРАКАНЬЯ', 'писи попы', 'Женя давай поцелуемся']
    }
  },

  computed: {
    randomProgress() {
      return Math.ceil(Math.random() * 100)
    }
  }
}
</script>

<template>
  <div class="flex h-[38px]">
    <!-- left -->
    <div class="min-w-[354px] text-base flex justify-between items-center p-[10px]">
      <p>МПЦИ Соцдевиации (Нижний Тагил)</p>
      <button @click="isOpen = !isOpen">+</button>
    </div>
    <!-- right -->
    <div class="flex">
      <div
        v-for="i in 48"
        :key="i"
        class="w-[38px] h-[38px] flex items-center justify-center"
        :class="{ 'border-r border-r-[#556271]': i % 4 == 0 }"
      >
        <div class="h-[6px] w-full bg-[#7EFC00]"></div>
      </div>
    </div>
  </div>

  <div v-if="isOpen">
    <div v-for="username in users" :key="username" class="flex h-[38px]">
      <!-- left -->
      <div class="min-w-[354px] flex justify-end p-[10px]">{{ username }}</div>
      <!-- right -->
      <div class="flex">
        <div
          v-for="i in 48"
          :key="i"
          class="w-[38px] h-[38px] flex items-center justify-center border-b border-b-[#556271]"
          @mouseover="$emit('changeSelectedWeek', i)"
          :class="{
            'bg-red-500': i == selectedWeek,
            'bg-[#014870]': i !== selectedWeek,
            'border-r border-r-[#556271]': i % 4 == 0
          }"
        >
          {{ randomProgress }}
        </div>
      </div>
    </div>
  </div>
</template>
