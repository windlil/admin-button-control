import { defineStore } from 'pinia' 

const PermissionsMap = {
  ADMIN: ['admin:add', 'admin:remove'],
  USER: ['user:add']
}

export const usePermissionsStore = defineStore('permissionsStore', {
  state: (): {
    account: 'USER' | 'ADMIN',
    [key: string]: any
  } => ({
    account: 'ADMIN',
    permissions: PermissionsMap.ADMIN
  }),
  actions: {
    changePermission() {
      if (this.account === 'ADMIN') {
        this.account = 'USER'
        this.permissions = PermissionsMap[this.account]
      } else {
        this.account = 'ADMIN'
        this.permissions = PermissionsMap[this.account]
      }
    }
  }
})

