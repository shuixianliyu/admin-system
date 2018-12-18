<template>
    <div>
      <vheader></vheader>
      <sidebar></sidebar>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import vheader from './vheader';
  import sidebar from './sidebar';
    export default {
        name: "home",
      components:{
          vheader,sidebar
      }
    }
</script>

<style scoped>
.content{
  position: absolute;
  top:100px;
  left:200px;
  right:0;
  bottom:0;
}
</style>
