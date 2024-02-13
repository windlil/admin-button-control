<script setup lang="ts">
import { computed } from 'vue'
import { usePermissions } from '../usePermissions'

const props = defineProps<{
  value: any  
}>()

const isRender = computed(() => {
  return usePermissions(props.value)
})
</script>

<template>
  <template v-if="isRender">
    <slot />
  </template>
</template>