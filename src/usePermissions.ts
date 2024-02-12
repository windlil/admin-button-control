import { usePermissionsStore } from "./store/usePermissions"

type permissions = string | any[]

export function usePermissions(permissions: permissions, defaultValue = true) {

  // 如果没有传入控制权限则返回默认值
  if (!permissions) return defaultValue

  // 获取请求中得到的权限码
  const { permissions: accountPermissions } = usePermissionsStore()

  // 判断控制权限是否为数组
  if (!Array.isArray(permissions)) {
    return accountPermissions.includes(permissions)
  } else {
    return accountPermissions.some((permission: any) => permissions.includes(permission))
  }
}