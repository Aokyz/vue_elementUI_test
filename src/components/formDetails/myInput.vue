<template>
  <div style="width:500px; margin-left:20px;">
    <el-input  v-model="input10" size="small"  clearable>

    </el-input>

<!--在复合型输入框中要想多选框的默认文字显示出来，一定要显式的设置宽度,然后对于有clearable属性的输入框，需要给input设置一个margin
  这个margin是在复合型输入框并且这个输入框设置了clearable属性的，那就要设置
-->

        <el-input v-model.number="age" size="small"  style="margin:20px;" clearable @change="handleChange" @blur="handleBlur">
          <el-select v-model="select" slot="append" style="width:70px;">
            <el-option label="岁" value="岁"></el-option>
            <el-option label="月" value="月"></el-option>
            <el-option label="天" value="天"></el-option>
          </el-select>

        </el-input>

    <div >
      <el-input v-model="input" >
        <el-select v-model="select2" slot="prepend" style="width:95px;">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>

    </div>

  </div>
</template>

<script>
  export default {
    name: "my-input",
    data(){
      return {
        input:'',
        age:'',
        // select:'ggg',
        select:'岁',
        input5:'',
        select2:'餐厅名',
        input10:''

      }
    },
    methods:{
      handleChange(val){
        console.log(val);
      },
      handleBlur(val){
        console.log(val);
      }
    }
  }
</script>

<style scoped>
  /*.el-select .el-input {*/
    /*width: 130px;*/
  /*}*/
  /*.input-with-select .el-input-group__prepend {*/
    /*background-color: #fff;*/
  /*}*/
</style>
