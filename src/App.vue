<script setup lang="ts">
import { usePermissionsStore } from './store/usePermissions'
import { storeToRefs } from 'pinia'
import { usePermissions } from './usePermissions'
import Auth from './components/Auth.vue'

const permissionsStore = usePermissionsStore()
const { account } = storeToRefs(permissionsStore)
const switchPermission = () => {
  permissionsStore.changePermission()
}
</script>

<template>
  <div class="row">
    <div class="col">
      <h2>v-if</h2>
      <div>
        <p>当前权限：{{ account }}</p>
        <button @click="switchPermission">点击切换当前权限</button>
      </div>
      <div>
        <p>所有用户可见</p>
        <button v-if="usePermissions(['app:add', 'app:add'])">增加</button>
      </div>
      <div>
        <p>仅管理员可见</p>
        <button v-if="usePermissions(['app:remove'])">删除</button>
      </div>
    </div>
    <div class="col">
      <h2>组件方式</h2>
      <div>
        <p>当前权限：{{ account }}</p>
        <button @click="switchPermission">点击切换当前权限</button>
      </div>
      <div>
        <p>所有用户可见</p>
        <Auth :value="['app:add', 'app:add']">
          <button>增加</button>
        </Auth>
      </div>
      <div>
        <p>仅管理员可见</p>
        <Auth :value="['app:remove']">
          <button>删除</button>
        </Auth>
      </div>
    </div>
    <div class="col">
      <h2>指令方式</h2>
      <div>
        <p>当前权限：{{ account }}</p>
        <button @click="switchPermission">点击切换当前权限</button>
      </div>
      <div>
        <p>所有用户可见</p>
        <button v-auth="['app:add', 'app:add']">增加</button>
      </div>
      <div>
        <p>仅管理员可见</p>
        <button v-auth="['app:remove']">删除</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
}

.col {
  margin: 50px;
}
</style>
