import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw[] = [
  {
    path: '/official',
    component: Layout,
    meta: {
      title: '官方周边',
      icon: 'i-ion:apps',
      expand: true,
    },
    children: [
      {
        path: 'fantastic-startkit',
        redirect: '',
        name: 'officialFantasticStartkit',
        meta: {
          title: 'Fantastic-startkit 项目启动套件',
          icon: 'https://cn.vuejs.org/logo.svg',
          link: 'https://hooray.github.io/fantastic-startkit/',
        },
      },
      {
        path: 'one-step-console',
        redirect: '',
        name: 'officialOneStepConsole',
        meta: {
          title: 'One-step Console 像导播一样编排你的工作现场',
          icon: 'https://one-step-console.hurui.me/logo.png',
          link: 'https://one-step-console.hurui.me',
        },
      },
      {
        path: 'fantastic-mobile',
        redirect: '',
        name: 'officialFantasticMobile',
        meta: {
          title: 'Fantastic-mobile 自成一派的 H5 框架',
          icon: 'https://fantastic-mobile.hurui.me/logo.png',
          link: 'https://fantastic-mobile.hurui.me',
        },
      },
    ],
  },
  {
    path: '/recommand',
    component: Layout,
    meta: {
      title: '友情推荐',
      icon: 'i-ic:outline-handshake',
      expand: true,
    },
    children: [
      {
        path: 'vform',
        redirect: '',
        name: 'recommandVform',
        meta: {
          title: 'VForm 低代码表单',
          icon: 'https://www.vform666.com/mini-logo.png',
          link: 'https://www.vform666.com',
        },
      },
      {
        path: 'form-create',
        redirect: '',
        name: 'recommandFormcreate',
        meta: {
          title: 'FormCreate 可视化表单设计器',
          icon: 'https://form-create.com/logo.png',
          link: 'https://form-create.com',
        },
      },
      {
        path: 'vexip',
        redirect: '',
        name: 'recommandVexip',
        meta: {
          title: 'Vexip UI 组件库',
          icon: 'https://www.vexipui.com/vexip-ui.png',
          link: 'https://www.vexipui.com/zh-CN',
        },
      },
      {
        path: 'mineadmin',
        redirect: '',
        name: 'recommandMineadmin',
        meta: {
          title: 'MineAdmin 开箱即用后台系统',
          icon: 'https://www.mineadmin.com/favicon.ico',
          link: 'https://github.com/mineadmin/mineadmin',
        },
      },
      {
        path: 'antdv-next',
        redirect: '',
        name: 'recommandAntdvNext',
        meta: {
          title: 'Antdv Next 组件库',
          icon: 'https://www.antdv-next.com/antdv-next.svg',
          link: 'https://www.antdv-next.com/',
        },
      },
    ],
  },
]

export default routes
