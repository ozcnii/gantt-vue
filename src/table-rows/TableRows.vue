<script>
import TableBody from './TableBody.vue'
import TableHeader from './TableHeader.vue'
import { organizations } from '../data'

export default {
  components: { TableHeader, TableBody },
  data() {
    return {
      selectedWeek: null,
      selectedEmployee: null,
      organizations,
      months: [
        'Май 2023',
        'Июнь 2023',
        'Июль 2023',
        'Август 2023',
        'Сентябрь 2023',
        'Октябрь 2023',
        'Ноябрь 2023',
        'Декабрь 2023',
        'Январь 2024',
        'Февраль 2024'
      ],

      // TODO:
      // weeks: [{
      //   week: number,
      //   year: number
      // }],

      // progress также хранить неделю и год

      weeks: [
        {
          week: 18,
          year: 2023
        },
        {
          week: 19,
          year: 2023
        },
        {
          week: 20,
          year: 2023
        },
        {
          week: 21,
          year: 2023
        },
        {
          week: 22,
          year: 2023
        },
        {
          week: 23,
          year: 2023
        },
        {
          week: 24,
          year: 2023
        },
        {
          week: 25,
          year: 2023
        },
        {
          week: 26,
          year: 2023
        },
        {
          week: 27,
          year: 2023
        },
        {
          week: 28,
          year: 2023
        },
        {
          week: 29,
          year: 2023
        },
        {
          week: 31,
          year: 2023
        },
        {
          week: 32,
          year: 2023
        },
        {
          week: 33,
          year: 2023
        },
        {
          week: 34,
          year: 2023
        },
        {
          week: 35,
          year: 2023
        },
        {
          week: 36,
          year: 2023
        },
        {
          week: 37,
          year: 2023
        },
        {
          week: 38,
          year: 2023
        },
        {
          week: 40,
          year: 2023
        },
        {
          week: 41,
          year: 2023
        },
        {
          week: 42,
          year: 2023
        },
        {
          week: 43,
          year: 2023
        },
        {
          week: 44,
          year: 2023
        },
        {
          week: 45,
          year: 2023
        },
        {
          week: 46,
          year: 2023
        },
        {
          week: 47,
          year: 2023
        },
        {
          week: 48,
          year: 2023
        },
        {
          week: 49,
          year: 2023
        },
        {
          week: 50,
          year: 2023
        },
        {
          week: 51,
          year: 2023
        },
        {
          week: 0,
          year: 2024
        },
        {
          week: 1,
          year: 2024
        },
        {
          week: 2,
          year: 2024
        },
        {
          week: 3,
          year: 2024
        },
        {
          week: 4,
          year: 2024
        },
        {
          week: 5,
          year: 2024
        },
        {
          week: 6,
          year: 2024
        },
        {
          week: 7,
          year: 2024
        }
      ]
    }
  },

  methods: {
    changeSelectedWeek(weekKey) {
      this.selectedWeek = weekKey
    },
    changeSelectedEmployee(employee) {
      this.selectedEmployee = employee
    },
    toggleOpenOrganization(name) {
      this.organizations = this.organizations.map((organization) => {
        if (organization.name === name) {
          organization.isOpen = !organization.isOpen
        }
        return organization
      })
    },
    tableMouseoutHandler() {
      this.selectedWeek = null
      this.selectedEmployee = null
    }
  }
}
</script>

<template>
  <div @mouseout="tableMouseoutHandler">
    <table-header
      :selectedWeek="selectedWeek"
      :months="months"
      :weeks="weeks"
      @changeSelectedWeek="changeSelectedWeek"
    ></table-header>

    <table-body
      :selectedWeek="selectedWeek"
      :selectedEmployee="selectedEmployee"
      :organizations="organizations"
      :weeks="weeks"
      @toggleOpen="toggleOpenOrganization"
      @changeSelectedEmployee="changeSelectedEmployee"
    ></table-body>
  </div>
</template>
