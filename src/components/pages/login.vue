<template>
    <div class="login-box">
      <el-form :model="form" :rules="rules" class="demo-ruleForm" ref="ruleForm" status-icon label-width="70px">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
      <p class="login-tips">Tips : 用户名和密码随便填。</p>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
          return {
            form: {
              name: '小熊猫',
              password: 'qwe1234'
            },
            rules: {
              name: [
                {required: true, message: '请输入用户名', trigger: 'blur'},
                {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
              ],
              password: [
                {required: true, message: '请输入密码', trigger: 'blur'},
                {min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur'}
              ],
            }
          }
        },
        methods: {
          onSubmit(formName){
            this.$refs[formName].validate((valid) => {
              if (valid) {
                localStorage.setItem('token',this.form.name)
                this.$router.push('/')
                console.log(localStorage.getItem('token'))
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          }
        }
    }
</script>

<style scoped>
  .login-box{
    width: 300px;
    margin:60px auto;
  }
  .login-tips {
    margin:0 auto;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
  }
</style>
