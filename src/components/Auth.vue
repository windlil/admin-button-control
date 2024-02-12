<script setup lang="ts">
import { usePermissions } from '../usePermissions';

const props = defineProps<{
  value: any  
}>()

const isRender = usePermissions(props.value)
</script>

<template>
  <template v-if="isRender">
    <slot />
  </template>
</template>