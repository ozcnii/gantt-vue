<template>
  <div
    @scroll="$emit('scroll', $event)"
    v-for="({ progress, isProject, isEmpty, dismissWeek }, index) in progressList"
    class="border-b border-[#556271] flex h-[38px]"
    :key="index"
  >
    <empty-row v-if="isEmpty" :weeks="weeks" />

    <template v-else>
      <project-row
        v-if="isProject"
        :progress="getProgressRow(progress)"
        :selectedWeek="selectedWeek"
      />
      <employee-row
        v-else
        :progress="getProgressRow(progress, dismissWeek)"
        :selectedWeek="selectedWeek"
        :currentWeek="currentWeek"
      />
    </template>
  </div>
</template>

<script>
import EmployeeRow from './EmployeeRow.vue'
import EmptyRow from './EmptyRow.vue'
import ProjectRow from './ProjectRow.vue'
import { makeWeekKey } from '../utils'

export default {
  components: { EmptyRow, ProjectRow, EmployeeRow },
  props: {
    progressList: {
      type: Array,
      required: true
    },
    weeks: {
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
  emits: ['scroll'],
  methods: {
    makeWeekKey,
    getProgressRow(progress, dismissWeek) {
      // TODO: calc in watch ???
      const resultMap = {}
      const progressMap = {}

      progress.forEach((progressValue) => {
        const { week, year } = progressValue
        const key = this.makeWeekKey({ week, year })
        progressMap[key] = {
          ...progressValue,
          dismissWeek,
          isDissmissedWeak: dismissWeek <= key
        }
      })

      this.weeks.forEach(({ week, year }) => {
        const key = this.makeWeekKey({ week, year })
        // TODO: need emptyValue & removeValue
        resultMap[key] = progressMap[key] || {
          value: null,
          year: 0,
          week: 0,
          dismissWeek: null,
          isDissmissedWeak: false
        }
      })
      return Object.values(resultMap)
    }
  }
}
</script>
