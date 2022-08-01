import type { RouterConfig } from '@nuxt/schema'

// // https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  // blinks with "from" page first screen
  scrollBehavior: (to, _, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }

  // // blinks with "to" page second screen (because savedPosition moved to next page)
  // scrollBehavior(to, _from, savedPosition) {
  //   return new Promise((resolve, _reject) => {
  //     setTimeout(() => {
  //       if (savedPosition) {
  //         resolve(savedPosition)
  //       } else {
  //         if (to.hash) {
  //           resolve({
  //             el: to.hash,
  //             top: 80
  //           })
  //         } else {
  //           resolve({ top: 0 })
  //         }
  //       }
  //     }, 100)
  //   })
  // }
}
