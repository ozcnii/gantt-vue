<script>
import LeftMenu from './LeftMenu.vue'
import RightTable from './RightTable.vue'
import { organizations, months, weeks } from '../data'

export default {
  components: { LeftMenu, RightTable },
  data() {
    return {
      months,
      weeks,
      organizations,
      wrapperHeight: 0,
      scrollPosition: 0,
      selectedWeek: null,
      selectedEmployee: null
    }
  },

  methods: {
    // TODO: need use ID instead of NAME
    toggleOpenOrganization(name) {
      this.organizations = this.organizations.map((organization) => {
        if (organization.name === name) {
          organization.isOpen = !organization.isOpen
        }
        return organization
      })
    },
    scrollHandler(event) {
      this.scrollPosition = event.target.scrollTop
    },
    tableMouseoutHandler() {
      this.selectedWeek = null
      this.selectedEmployee = null
    },
    changeSelectedWeek(weekKey) {
      this.selectedWeek = weekKey
    }
  },

  watch: {
    scrollPosition(value) {
      this.$refs.rightTableWrapper.scrollTop = value
    }
  },

  mounted() {
    this.wrapperHeight = this.$refs.wrapperRef.offsetHeight
  }
}
</script>

<template>
  TODO:selectedEmployee
  <div ref="wrapperRef" class="h-[80vh]">
    <div class="flex" :style="{ height: wrapperHeight + 'px' }">
      <LeftMenu
        :organizations="organizations"
        :scrollPosition="scrollPosition"
        @toggle-open="toggleOpenOrganization"
        @scroll="scrollHandler"
      />
      <div
        class="overflow-x-scroll"
        ref="rightTableWrapper"
        @mouseleave="tableMouseoutHandler"
        @scroll="scrollHandler"
      >
        <RightTable
          :organizations="organizations"
          :weeks="weeks"
          :months="months"
          :selectedWeek="selectedWeek"
          :scrollPosition="scrollPosition"
          @changeSelectedWeek="changeSelectedWeek"
        />
      </div>
    </div>
  </div>
</template>
