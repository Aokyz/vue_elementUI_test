<template>
  <el-form>

<el-form-item :model="testForm" >
  <el-select v-model="testForm.value" placeholder="请选择" style="margin:30px 50px" @change="handleChange">
    <!--在多选框中label和value属性的值最好是相同的-->
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      >
    </el-option>
  </el-select>
    <el-button @click="save">保存</el-button>
    <!--<el-select v-model="select">-->
      <!--<el-option label="ss" value="ss"></el-option>-->
    <!--</el-select>-->
</el-form-item>
  </el-form>

</template>

<script>

  export default {
    name: "mySelect",
    data() {
      return {
        select:'ddd',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        testForm:{
          value: ''
        }

      }
    },
    created(){
      this.testForm.value='黄金糕'
    },
    methods: {
      handleChange(val){
        console.log(val);//这个绑定的是value值
        console.log(this.value)//这个绑定的也是value值
      },
      save(){
        //如果下拉框没有被点击过，那么得到的是它原有的值，如果点击过，那么得到的是值所对应的value
        console.log(this.testForm.value)
      }

    }
  }
</script>

<style scoped>

</style>
