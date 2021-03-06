import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _4be4bdee = () => interopDefault(import('..\\pages\\items\\index.vue' /* webpackChunkName: "pages_items_index" */))
const _a7c4a51c = () => interopDefault(import('..\\pages\\schedules\\index.vue' /* webpackChunkName: "pages_schedules_index" */))
const _0b7b38bc = () => interopDefault(import('..\\pages\\items\\new.vue' /* webpackChunkName: "pages_items_new" */))
const _0d723940 = () => interopDefault(import('..\\pages\\schedules\\new.vue' /* webpackChunkName: "pages_schedules_new" */))
const _10753854 = () => interopDefault(import('..\\pages\\items\\_id.vue' /* webpackChunkName: "pages_items__id" */))
const _5d26ffb4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/items",
      component: _4be4bdee,
      name: "items"
    }, {
      path: "/schedules",
      component: _a7c4a51c,
      name: "schedules"
    }, {
      path: "/items/new",
      component: _0b7b38bc,
      name: "items-new"
    }, {
      path: "/schedules/new",
      component: _0d723940,
      name: "schedules-new"
    }, {
      path: "/items/:id",
      component: _10753854,
      name: "items-id"
    }, {
      path: "/",
      component: _5d26ffb4,
      name: "index"
    }],

    fallback: false
  })
}
