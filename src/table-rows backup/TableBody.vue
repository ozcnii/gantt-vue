<script>
import TableOrganizationRow from './TableOrganizationRow.vue'
export default {
  components: { TableOrganizationRow },
  emits: ['changeSelectedWeek'],
  props: { selectedWeek: [Number, null] }
}
</script>

<template>
  <div class="text-xs">
    <!-- v-for="organization in organizations" -->
    <div v-for="i in 10" :key="i">
      <!-- org_row -->
      <table-organization-row
        :selectedWeek="selectedWeek"
        @changeSelectedWeek="$emit('changeSelectedWeek', $event)"
      ></table-organization-row>
    </div>
  </div>
</template>
