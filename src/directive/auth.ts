import type { Directive } from 'vue'
import { usePermissions } from '../usePermissions'

export const AuthDirective: Directive = (el: HTMLElement, binding) => {
  const isRender = usePermissions(binding.value)
  if (!isRender) {
    removeEl(el)
  } else {
    addEl(el)
  }
}

function removeEl(el: any) {
  el._parent = el._parent ?? (el as HTMLElement).parentNode
  el._placeholder = document.createComment('auth')
  el._parent.replaceChild(el._placeholder, el)
}

function addEl(el: any) {
  if (!el._parent) return
  const elParent = el._parent as HTMLElement
  elParent.replaceChild(el, el._placeholder)
}