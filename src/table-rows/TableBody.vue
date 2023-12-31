<script>
import TableOrganizationRow from './TableOrganizationRow.vue'
export default {
  components: { TableOrganizationRow },
  props: {
    selectedWeek: {
      type: [String, null],
      required: true
    },
    organizations: {
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
  emits: ['toggleOpen', 'changeSelectedEmployee']
}
</script>

<template>
  <div class="text-xs">
    <div v-for="organization in organizations" :key="organization.name">
      <table-organization-row
        :selectedWeek="selectedWeek"
        :selectedEmployee="selectedEmployee"
        :organization="organization"
        :weeks="weeks"
        @toggleOpen="$emit('toggleOpen', $event)"
        @changeSelectedEmployee="$emit('changeSelectedEmployee', $event)"
      ></table-organization-row>
    </div>
  </div>
</template>
