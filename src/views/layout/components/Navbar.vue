<template>
  <div class="navbar">
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
    <!-- <breadcrumb /> -->
    <span>Nick FWS Manage</span>
    <!-- <el-dropdown class="changeTheme" trigger="click">
      <span class="el-dropdown-link">
        换肤<i class="el-icon-arrow-down el-icon--right"/>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <span @click="changeTheme('theme1')">皮肤一</span>
        </el-dropdown-item>
        <el-dropdown-item>
          <span @click="changeTheme('theme2')">皮肤二</span>
        </el-dropdown-item>
        <el-dropdown-item>
          <span @click="changeTheme('theme3')">皮肤三</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> -->
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
         -->
        <img src="../../../assets/tupian.gif" class="user-avatar" alt="">
        <i class="el-icon-caret-bottom"/>
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            Home
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span style="display:block;" @click="logout">LogOut</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    changeTheme(theme) {
      window.document.documentElement.setAttribute('data-theme', theme)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: $navbar-height;
  line-height: $navbar-height;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
  color: #fff;
  @include set-navbar-bg($navbar-theme1);
  background: #ed731d;
  .hamburger-container {
    line-height: ($navbar-height + 10px);
    height: $navbar-height;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }

  .changeTheme {
    height: $navbar-height;
    display: inline-block;
    position: absolute;
    right: 85px;
    cursor: pointer;
  }

  .el-dropdown {
    @include set-navbar-text-color($navbar-text-color1);
  }

  .avatar-container {
    height: $navbar-height;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 12px;
      position: relative;
      line-height: initial;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 15px;
        font-size: 12px;
      }
    }
  }
}
</style>

