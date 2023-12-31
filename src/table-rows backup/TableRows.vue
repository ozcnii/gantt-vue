<script>
import TableBody from './TableBody.vue'
import TableHeader from './TableHeader.vue'

export default {
  components: { TableHeader, TableBody },
  data() {
    return {
      selectedWeek: null
    }
  },

  methods: {
    changeSelectedWeek(week) {
      this.selectedWeek = week
    }
  }
}
</script>

<template>
  <div @mouseout="selectedWeek = null">
    <table-header
      :selectedWeek="selectedWeek"
      @changeSelectedWeek="changeSelectedWeek"
    ></table-header>
    <table-body :selectedWeek="selectedWeek" @changeSelectedWeek="changeSelectedWeek"></table-body>
  </div>
</template>
