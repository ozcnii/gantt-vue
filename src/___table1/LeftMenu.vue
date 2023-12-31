<script>
import MenuOrganizationDropdown from './MenuOrganizationDropdown.vue'

export default {
  components: { MenuOrganizationDropdown },
  props: {
    organizations: {
      type: Array,
      required: true
    },
    scrollPosition: {
      type: Number,
      required: true
    }
  },
  emits: ['toggleOpen', 'scroll'],
  watch: {
    scrollPosition(value) {
      this.$refs.wrapper.scrollTop = value
    }
  }
}
</script>

<template>
  <div
    @scroll="$emit('scroll', $event)"
    class="border-r border-[#556271] min-w-[354px] overflow-x-scroll overflow-y-auto relative"
    ref="wrapper"
  >
    <div class="h-[40px] w-full bg-[#151A1E] sticky left-0 top-0" />
    <div>
      <MenuOrganizationDropdown
        v-for="organization in organizations"
        :key="organization.name"
        :organization="organization"
        @toggleOpen="$emit('toggleOpen', organization.name)"
      />
    </div>
  </div>
</template>
