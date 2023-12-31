<script>
export default {
  props: {
    selectedWeek: {
      type: [String, null],
      required: true
    },
    organization: {
      type: Object,
      required: true
    },
    selectedEmployee: {
      type: [Number, null],
      required: true
    },
    weeks: {
      type: Array,
      required: true
    }
  },
  emits: ['toggleOpen', 'changeSelectedEmployee'],
  methods: {
    getProgressRow(progress) {
      // TODO: calc in watch ???
      const resultMap = {}
      const progressMap = {}

      progress.forEach(({ week, year, value }) => {
        const key = this.makeKey({ week, year })
        progressMap[key] = { week, year, value }
      })

      this.weeks.forEach(({ week, year }) => {
        const key = this.makeKey({ week, year })
        // TODO: need emptyValue & removeValue
        resultMap[key] = progressMap[key] || { value: null, year: 0, week: 0 }
      })
      return Object.values(resultMap)
    },

    makeKey({ week, year }) {
      return `${week}-${year}`
    }
  }
}
</script>

<template>
  <div class="flex h-[38px] relative">
    <!-- left -->
    <div class="sticky bg-[#28323B] left-0 top-0 h-[38px] min-w-[354px] p-[10px] text-base">
      <div class="flex justify-between">
        <p>{{ organization.name }}</p>
        <button @click="$emit('toggleOpen', organization.name)">
          {{ organization.isOpen ? '-' : '+' }}
        </button>
      </div>
    </div>
    <!-- right -->
    <div class="flex">
      <div
        v-for="({ week, year, value }, index) in getProgressRow(organization.progress)"
        :key="makeKey({ week, year })"
        class="w-[38px] h-[38px] flex items-center justify-center"
        :class="{ 'border-r border-r-[#556271]': (index + 1) % 4 == 0 }"
      >
        <div
          class="h-[6px] w-full"
          :class="{
            'bg-red-500': value && value < 40,
            'bg-yellow-500': value && value > 39 && value < 70,
            'bg-green-500': value && value > 69,
            'bg-slate-500': value === null
          }"
        ></div>
      </div>
    </div>
  </div>

  <div v-if="organization.isOpen">
    <div v-for="position in organization.positions" :key="position.name">
      <div
        v-for="(employee, index) in position.employees"
        :key="employee.name"
        class="flex h-[38px] relative"
      >
        <!-- left -->
        <div
          class="sticky bg-[#28323B] left-0 top-0 h-[38px] min-w-[354px] flex justify-end items-center pl-[10px]"
          :class="{
            'justify-between': index === 0,
            'border-b border-b-[#556271]': index === position.employees.length - 1
          }"
        >
          <p v-if="index == 0">
            {{ position.name }}
          </p>
          <div
            class="border-l-4 w-[200px] h-[38px] flex gap-2 items-center pr-[10px] pl-1"
            :class="
              selectedEmployee == employee.id
                ? 'border-l-blue-500 bg-[#556271]'
                : 'border-l-transparent'
            "
          >
            <div class="h-[24px] w-[24px] border-2 border-red-500 rounded-full"></div>
            <span>{{ employee.name }}</span>
          </div>
        </div>

        <!-- right -->
        <div class="flex">
          <div
            v-for="({ week, year, value }, progressIndex) in getProgressRow(employee.progress)"
            :key="makeKey({ week, year })"
            class="w-[38px] h-[38px] flex items-center justify-center border-b border-b-[#556271]"
            :class="{
              'bg-transparent': makeKey({ week, year }) == selectedWeek,
              'bg-[#69C7FF]': value && value < 80,
              'bg-[#0296EC]': value && value >= 80 && value <= 94,
              'bg-[#014870]': value && value >= 95,
              'bg-black': value === null,
              'border-r border-r-[#556271]': (progressIndex + 1) % 4 == 0
            }"
            @mouseover="$emit('changeSelectedEmployee', employee.id)"
          >
            {{ value || '-' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
