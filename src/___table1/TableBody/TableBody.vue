<template>
  <div
    @scroll="$emit('scroll', $event)"
    v-for="(progress, index) in progressList"
    class="flex h-[38px]"
    :key="index"
  >
    <empty-row v-if="progress.isEmpty" :weeks="weeks" />

    <template v-else>
      <project-row v-if="progress.isProject" :progress="getProgressRow(progress)" />
      <employee-row
        v-else
        :progress="getProgressRow(progress)"
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
import { makeWeekKey, EMPTY_VALUE, DISABLED_VALUE } from '../utils'

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
    getProgressRow({ progress, dismissWeek, startDate, endDate }) {
      // TODO: calc in 'watch' ???
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

      const startDateKey =
        startDate && this.makeWeekKey({ week: startDate?.week, year: startDate?.year })
      const endDateKey = endDate && this.makeWeekKey({ week: endDate?.week, year: endDate?.year })

      this.weeks.forEach(({ week, year }) => {
        const key = this.makeWeekKey({ week, year })
        // TODO: need emptyValue & removeValue
        const emptyProgressRow = {
          week,
          year,
          value: EMPTY_VALUE,
          dismissWeek,
          isDissmissedWeak: dismissWeek <= key
        }
        const progressRow = progressMap[key] || emptyProgressRow
        const progressRowKey = this.makeWeekKey({ week, year })

        if (startDate) {
          if (startDateKey < progressRowKey) {
            progressRow.value = DISABLED_VALUE
          }
          // TODO: ???
        }

        if (endDate) {
          if (endDateKey === progressRowKey) {
            progressRow.value = DISABLED_VALUE
          }

          if (progressRowKey > endDateKey) {
            progressRow.value = EMPTY_VALUE
          }
        }
        resultMap[key] = progressRow
      })
      return Object.values(resultMap)
    }
  }
}
</script>
