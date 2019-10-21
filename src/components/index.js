import {lzoHeader,lzoFooter,ApptoolLinks} from './Layout/index'
import {LzoButton} from './LzoButton/index'

import VisCodeEnter from './VisCodeEnter/src/index'
import Countdown from './Countdown/src/index'
// import {Countdown} from './Countdown/index'

const iview = {
    lzoHeader,
    lzoFooter,
    ApptoolLinks,
    
    LzoButton,
    VisCodeEnter,
    Countdown,
}
console.log(iview)
const install = function (Vue) {
  Object.keys(iview).forEach((key) => {
    Vue.component(iview[key].name, iview[key])
  })
  /**
    * 全局注定弹框
    */
//   Vue.prototype.$xfdDialog = xfdDialog
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default install