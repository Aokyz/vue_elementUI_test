import Vue from 'vue'
import Router from 'vue-router'
import mySelect from '@/components/formDetails/mySelect'
import myInput from '@/components/formDetails/myInput'
import myCheckbox from '@/components/formDetails/myCheckbox'
import myCascader from '@/components/formDetails/myCascader'
import myTable from '@/components/formDetails/myTable'
import myTree from '@/components/treeElement/myTree'
import ser from '@/components/formDetails/ser'
import upload from '@/components/formDetails/uploads'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'mySelect',
    //   component: mySelect
    // },
    // {
    //   path: '/',
    //   name: 'myInput',
    //   component: myInput
    // },
    // {
    //   path: '/',
    //   name: 'myCheckbox',
    //   component: myCheckbox
    // },
    // {
    //   path: '/',
    //   name: 'myCascader',
    //   component: myCascader
    // },
    // {
    //   path: '/',
    //   name: 'myTable',
    //   component: myTable
    // },
    {
      path: '/',
      name: 'mySelect',
      component: mySelect
    },
  ]
})
