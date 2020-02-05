import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@okta/okta-vue'
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading
Vue.use(Auth, {
  issuer: 'https://dev-504375.okta.com/oauth2/default',
  client_id: '0oa1a9expU7ASDOUh4x6',
  redirect_uri: 'http://localhost:8082/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
})
Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard1',
    meta: { title: '首页', icon: 'form' },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'form' }
      }
    ]
  },
  { path: '/implicit/callback', component: Auth.handleCallback() },
  /*
  {
    path: '/postsManager',
    name: 'PostsManager',
    component: () => import('@/views/postsManager/index'),
    meta: { requiresAuth: true }
  },
  */
  {
    path: '/',
    component: Layout,
    redirect: '/approval',
    name: 'Approval',
    meta: { title: '审批流转', icon: 'form', showTitle: true },
    children: [
      {
        path: 'draftingApplication',
        name: 'DraftingApplication',
        component: () => import('@/views/approval/drafting-application/index'),
        meta: { title: '起草申请', icon: 'form' }
      }
    ]
  },

  /*
  {
    path: '/adjustmentPriceTool',
    name: 'AdjustmentPriceTool',
    component: Layout,
    meta: { title: '调价工具', icon: 'form', showTitle: true },
    children: [
      {
        path: 'adjustPriceSchemeQuery',
        name: 'AdjustPriceSchemeQuery',
        component: () => import('@/views/adjustment-price-tool/adjust-price-scheme-query/index'),
        meta: { title: '调价方案查询', icon: 'example' }
      },
      {
        path: 'accordingCpiAdjustment',
        name: 'AccordingCpiAdjustment',
        component: () => import('@/views/adjustment-price-tool/according-cpi-adjustment/index'),
        meta: { title: '按照CPI调整', showTitle: true },
        children: [
          {
            path: 'cpiAdjustmentPricePlan',
            name: 'CpiAdjustmentPricePlan',
            component: () => import('@/views/adjustment-price-tool/according-cpi-adjustment/cpi-adjustment-price-plan/index'),
            meta: { title: 'CPI调价方案', icon: 'example' }
          },
          {
            path: 'projectTag',
            name: 'ProjectTag',
            component: () => import('@/views/adjustment-price-tool/according-cpi-adjustment/project-tag/index'),
            meta: { title: '项目标签', icon: 'example' }
          },
          {
            path: 'tagManagement',
            name: 'TagManagement',
            component: () => import('@/views/adjustment-price-tool/according-cpi-adjustment/tag-management/index'),
            meta: { title: '标签管理', icon: 'example' }
          }
        ]
      },
      {
        path: 'serviceAllocationAdjustmentPrice',
        name: 'ServiceAllocationAdjustmentPrice',
        component: () => import('@/views/adjustment-price-tool/service-allocation-adjustment-price/index'),
        meta: { title: '服务量分配式调价', showTitle: true },
        children: [
          {
            path: 'serviceAllocationAdjustment',
            name: 'ServiceAllocationAdjustment',
            component: () => import('@/views/adjustment-price-tool/service-allocation-adjustment-price/service-allocation-adjustment/index'),
            meta: { title: '服务量分配式调价', icon: 'example' }
          }
        ]
      },
      {
        path: 'predistributionDeclareAdjustmentTool',
        name: 'PredistributionDeclareAdjustmentTool',
        component: () => import('@/views/adjustment-price-tool/predistribution-declare-adjustment-tool/index'),
        meta: { title: '预分配申报调价工具', showTitle: true },
        children: [
          {
            path: 'adjustmentParameterSet',
            name: 'AdjustmentParameterSet',
            component: () => import('@/views/adjustment-price-tool/predistribution-declare-adjustment-tool/adjustment-parameter-set/index'),
            meta: { title: '调价参数设置', icon: 'example' }
          },
          {
            path: 'medicalAdjustmentProjectDeclare',
            name: 'MedicalAdjustmentProjectDeclare',
            component: () => import('@/views/adjustment-price-tool/predistribution-declare-adjustment-tool/medical-adjustment-project-declare/index'),
            meta: { title: '医疗机构调价项目申报', icon: 'example' }
          },
          {
            path: 'poolareaAdjustmentProjectScore',
            name: 'PoolareaAdjustmentProjectScore',
            component: () => import('@/views/adjustment-price-tool/predistribution-declare-adjustment-tool/poolarea-adjustment-project-score/index'),
            meta: { title: '统筹区调价项目评分', icon: 'example' }
          },
          {
            path: 'adjustmentPricePlanView',
            name: 'AdjustmentPricePlanView',
            component: () => import('@/views/adjustment-price-tool/predistribution-declare-adjustment-tool/adjustment-price-plan-view/index'),
            meta: { title: '调价方案查看', icon: 'example' }
          }
        ]
      },
      {
        path: 'pointAdjustmentPriceTool',
        name: 'PointAdjustmentPriceTool',
        component: () => import('@/views/adjustment-price-tool/point-adjustment-price-tool/index'),
        meta: { title: '点数法调价工具', showTitle: true },
        children: [
          {
            path: 'pointAndRecycle',
            name: 'PointAndRecycle',
            component: () => import('@/views/adjustment-price-tool/point-adjustment-price-tool/point-and-recycle/index'),
            meta: { title: '点数与回收率', icon: 'example' }
          },
          {
            path: 'pointAdjustmentPrice',
            name: 'PointAdjustmentPrice',
            component: () => import('@/views/adjustment-price-tool/point-adjustment-price-tool/point-adjustment-price/index'),
            meta: { title: '点数法调价', icon: 'example' }
          }
          // {
          //   path: 'configurationImportProjectPoint',
          //   name: 'ConfigurationImportProjectPoint',
          //   component: () => import('@/views/adjustment-price-tool/point-adjustment-price-tool/configuration-import-project-point/index'),
          //   meta: { title: '配置与导入项目点数', icon: 'example' }
          // }
        ]
      },
      {
        path: 'costCalculateAdjustmentPriceTool',
        name: 'CostCalculateAdjustmentPriceTool',
        component: () => import('@/views/adjustment-price-tool/cost-calculate-adjustment-price-tool/index'),
        meta: { title: '成本测算调价工具', showTitle: true },
        children: [
          {
            path: 'costCalculateAdjustmentPrice',
            name: 'CostCalculateAdjustmentPrice',
            component: () => import('@/views/adjustment-price-tool/cost-calculate-adjustment-price-tool/cost-calculate-adjustment-price/index'),
            meta: { title: '成本测算调价', icon: 'example' }
          }
        ]
      }
    ]
  },
  */

  // {
  //   path: '/link',
  //   component: Layout,
  //   // redirect: '/interface/dialog',
  //   name: 'Demo',
  //   meta: { title: 'POC', icon: 'form' },
  //   children: [
  //     {
  //       // path: 'demo',
  //       // name: 'demo',
  //       // component: () => import('@/views/demo'),
  //       path: 'http://192.168.0.150:9528',
  //       meta: { title: 'POC', icon: 'link' }
  //       // meta: { title: 'POC', icon: 'example' }
  //     }
  //   ]
  // },
  { path: '*', redirect: '/404', hidden: true }
]


// 这是异步控制路由目前用不上，请不要在这里面配置
export const asyncRoutes = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
