<template>
  <div class="sidebar">
    <el-menu :default-active="this.$route.path" router>
      <el-submenu :index="first.name" :key="index" v-for="(first,index) in menu" style="background:#0d6962;
    color:#fff;">
        <template slot="title">{{first.name}}</template>
        <el-menu-item :index="second.nav" :key="index" v-for="(second,index) in first.group">{{second.name}}
        </el-menu-item>
      </el-submenu>
      <!--<el-menu-item :index="first.nav" :key="index" v-for="(first,index) in menu">{{first.name}}</el-menu-item>-->
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "sidebar",
    data() {
      return {
        menu: [
          {
            name: '商城管理',
            group: [
              {
                name: '轮播图设置',
                nav: '/home/banner',
              },
              {
                name: '签到规则设置',
                nav: '/home/sign',
              },
              {
                name: '关于我们',
                nav: '/home/about',
              }
            ]
          },
          {
            name: '商品管理',
            group: [
              {
                name: '商品列表',
                nav: '/home/good',
              }
            ]
          },
          {
            name: '订单管理',
            group: [
              {
                name: '订单管理',
                nav: '/home/order',
              },
              {
                name: '评价列表',
                nav: '/home/rating',
              }
            ]
          },
          {
            name: '企业管理',
            group: [
              {
                name: '企业初审',
                nav: '/home/enterprise',
              },
              {
                name: '企业终审',
                nav: '/home/check',
              },
              {
                name: '短信设置',
                nav: '/home/message',
              }
            ]
          },
          {
            name: '用户管理',
            group: [
              {
                name: '用户列表',
                nav: '/home/userList',
              }
            ]
          },
          {
            name: '权限管理',
            group: [
              {
                name: '用户管理',
                nav: '/home/range',
              },
              {
                name: '角色管理',
                nav: '/home/role',
              },
              {
                name: '菜单管理',
                nav: '/home/nav',
              },
              {
                name: '企业用户',
                nav: '/home/company',
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .sidebar {
    position: absolute;
    top: 100px;
    left: 0;
    width: 200px;
    height: 100%;
    background: #0d6962;
  }
</style>
