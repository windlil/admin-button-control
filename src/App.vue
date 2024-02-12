<script setup lang="ts">
import { usePermissionsStore } from './store/usePermissions'
import { storeToRefs } from 'pinia'
import { usePermissions } from './usePermissions'

const permissionsStore = usePermissionsStore()
const { account } = storeToRefs(permissionsStore)
const switchPermission = () => {
  permissionsStore.changePermission()
}
</script>

<template>
  <div>
    <div>
      <p>当前权限：{{ account }}</p>
      <button @click="switchPermission">点击切换当前权限</button>
    </div>
    <div>
      <p>所有用户可见</p>
      <button v-if="usePermissions(['user:add','admin:add'])">增加</button>
    </div>
    <div>
      <p>仅管理员可见</p>
      <button v-if="usePermissions(['admin:remove'])">删除</button>
    </div>
  </div>
</template>

<style scoped></style>
