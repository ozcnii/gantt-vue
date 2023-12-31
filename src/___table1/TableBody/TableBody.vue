<script>
import DefaultRow from './DefaultRow.vue'
import EmptyRow from './EmptyRow.vue'
import ParentRow from './ParentRow.vue'
import { makeWeekKey } from '../utils'

export default {
  components: { EmptyRow, ParentRow, DefaultRow },
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
    }
  },
  emits: ['scroll'],
  methods: {
    makeWeekKey,
    getProgressRow(progress) {
      // TODO: calc in watch ???
      const resultMap = {}
      const progressMap = {}

      progress.forEach(({ week, year, value }) => {
        const key = this.makeWeekKey({ week, year })
        progressMap[key] = { week, year, value }
      })

      this.weeks.forEach(({ week, year }) => {
        const key = this.makeWeekKey({ week, year })
        // TODO: need emptyValue & removeValue
        resultMap[key] = progressMap[key] || { value: null, year: 0, week: 0 }
      })

      return Object.values(resultMap)
    }
  }
}
</script>

<template>
  <div
    @scroll="$emit('scroll', $event)"
    v-for="({ progress, isParent, isEmpty }, index) in progressList"
    class="border-b border-[#556271] flex h-[38px]"
    :key="index"
  >
    <EmptyRow v-if="isEmpty" :weeks="weeks" />

    <template v-else>
      <ParentRow
        v-if="isParent"
        :progress="getProgressRow(progress)"
        :selectedWeek="selectedWeek"
      />
      <DefaultRow v-else :progress="getProgressRow(progress)" :selectedWeek="selectedWeek" />
    </template>
  </div>
</template>
