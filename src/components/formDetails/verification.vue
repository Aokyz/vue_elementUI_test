<template>
  <div>
    <el-button>新增用户</el-button>
    <el-dialog title="用户信息" :visible.sync="dialogUser" center class="userDialog">
      <el-form ref="userMessages" :model="userMessages" label-position="left" label-width="80px"
               class="user-messages" :rules="userRules">
        <el-row :gutter="20">

          <el-col :span="12">
            <el-form-item label="账号" prop="username">
              <el-input v-model="userMessages.username" @input="usernameChange" :class="{redBorder:promptShow}"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="密码" prop="password">
              <el-input v-model="userMessages.password"
                        type="password"
                        class="password"></el-input>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row :gutter="20">

          <el-col :span="12">
            <el-form-item label="用户名" prop="nickname">
              <el-input v-model="userMessages.nickname"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户角色" prop="role_name">
              <el-select v-model="userMessages.role_name">
                <el-option label="标注专家" value="1"></el-option>
                <el-option label="审核专家" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>
        <el-form-item label="所属医院" prop="hospital">
          <el-input v-model="userMessages.hospital" :disabled="newUser"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="saveUser('userMessages')" type="primary">保存</el-button>
        <el-button @click="cancelUser" class="userCancel">取消</el-button>
      </div>

    </el-dialog>
  </div>

</template>

<script>
  export default {
    name: "verification",
    data(){
      return {
        userMessages:{},
        userRules: {
          //这里写了前面会有一个红色的*（星号）
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          nickname: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          role_name: [
            {required: true, message: '请选择用户身份', trigger: 'change'}
          ],
          defaultChecked:[
            {required: true, message: '请选择分类', trigger: 'check'}
          ]

        },

      }
    },
    methods:{
      saveUser(formName){

      },
      cancelUser(){

      },
    }
  }
</script>

<style scoped>

</style>
