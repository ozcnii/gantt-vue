<script>
import TableHeader from './TableHeader.vue'
import TableBody from './TableBody/TableBody.vue'
import { makeWeekKey } from './utils'

export default {
  components: { TableBody, TableHeader },
  props: {
    organizations: {
      type: Array,
      required: true
    },
    weeks: {
      type: Array,
      required: true
    },
    months: {
      type: Array,
      required: true
    },
    scrollPosition: {
      type: Number,
      required: true
    },
    selectedWeek: {
      type: [String, null],
      required: true
    }
  },
  emits: ['scroll', 'changeSelectedWeek'],
  data() {
    return {
      // TODO: currentWeek from vuex-store
      // TODO: нет 30й недели
      currentWeek: `31-2023`
    }
  },
  computed: {
    progressList() {
      const res = []
      for (const organization of this.organizations) {
        res.push({
          isParent: true,
          isEmpty: false,
          progress: organization.progress
        })

        if (organization.isOpen) {
          for (const position of organization.positions) {
            if (position.employees.length === 0) {
              res.push({ isEmpty: true, isParent: false, progress: [] })
            }

            for (const employee of position.employees) {
              res.push({
                isParent: false,
                isEmpty: false,
                progress: employee.progress
              })
            }
          }
        }
      }
      return res
    }
  },
  methods: {
    makeWeekKey
  }
}
</script>

<template>
  <div class="relative">
    <TableHeader
      :weeks="weeks"
      :months="months"
      :currentWeek="currentWeek"
      :selectedWeek="selectedWeek"
      @changeSelectedWeek="$emit('changeSelectedWeek', $event)"
    />
    <TableBody
      :progressList="progressList"
      :weeks="weeks"
      :selectedWeek="selectedWeek"
      @scroll="$emit('scroll', $event)"
    />
  </div>
</template>
