<script>
export default {
  props: {
    organization: {
      type: Object,
      required: true
    }
  },
  emits: ['toggleOpen']
}
</script>

<template>
  <div>
    <div class="h-[38px] font-bold flex justify-between gap-1">
      <div class="flex gap-1">
        <div>+</div>
        {{ organization.name }}
      </div>

      <button
        @click="$emit('toggleOpen')"
        class="bg-red-500 hover:bg-red-700 text-white font-bold px-2 w-[50px]"
      >
        {{ organization.isOpen ? '-' : '+' }}
      </button>
    </div>

    <template v-if="organization.isOpen">
      <div
        v-for="position in organization.positions"
        class="flex justify-between min-h-[38px] border-b border-b-[#556271]"
        :key="position.name"
      >
        <p class="text-red-500">{{ position.name }}</p>
        <ul class="flex flex-col items-end">
          <li
            class="h-[38px] w-[200px]"
            v-for="(employee, index) in position.employees"
            :key="employee.name"
          >
            {{ index }} - {{ employee.name }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>
