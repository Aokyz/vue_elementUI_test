<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<my-select></my-select>-->
    <!--<my-input></my-input>-->
    <!--<my-checkbox></my-checkbox>-->
    <!--<my-cascader></my-cascader>-->
   <router-view></router-view>


  </div>
</template>

<script>
  // import container from './components/container'
  import mySelect from './components/formDetails/mySelect'
  import myInput from './components/formDetails/myInput'
  import myCheckbox from './components/formDetails/myCheckbox'
  import myCascader from './components/formDetails/myCascader'
  import myTable from './components/formDetails/myTable'
  import myTree from './components/treeElement/myTree'
  import upload from './components/formDetails/uploads'


export default {
  name: 'App',
  components:{mySelect,myInput,myCheckbox,myCascader,myTable,myTree,upload}
}
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;

}
</style>
