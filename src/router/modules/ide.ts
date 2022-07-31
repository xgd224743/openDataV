import type { AppRouteRecordRaw } from '@/router/interface'
const basicRoutes: AppRouteRecordRaw[] = [
  {
    path: '/ide',
    name: 'Ide',
    component: () => import('@/dataworks/ide/Ide.vue'),
    meta: {
      title: '代码编辑器',
      ignoreAuth: true
    }
  }
]
export default basicRoutes