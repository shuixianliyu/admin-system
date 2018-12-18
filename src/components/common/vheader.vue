<template>
  <div class="vheader">
    <div class="right">
      <!--用户头像-->
      <div class="avatar">
        <img src="static/images/img.jpg">
      </div>
      <div class="login">
        <el-dropdown @command="handleCommand" trigger="click">
          <span class="el-dropdown-link">
              {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item command="loginout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="left">后台管理系统</div>
  </div>
</template>

<script>
  export default {
    name: "vheader",
    computed:{
      userName(){
        const name=localStorage.getItem('token');
        return name
      }
    },
    methods: {
      handleCommand(command) {
        if(command=='loginout') {
          this.$router.push("/login")
        }else{}
      }
    }
  }
</script>

<style scoped>
  .vheader {
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    padding-top: 20px;
    background: aquamarine;
  }

  .left {
    width: 200px;
    margin-left: 80px;
  }

  .right {
    float: right;
    margin-right: 80px;
  }

  .right .avatar {
    display: inline-block;
    width: 60px;
    height: 60px;
    vertical-align: middle;
  }

  .avatar img {
    width: 60px;
    height: 60px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  .login {
    display: inline-block;
  }
</style>
