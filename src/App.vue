<template>
  <div id="app">
    <div class="ui inverted top fixed menu">
      <div class="ui container">
        <el-button type="primary" v-if="!authenticated" @click="login()">Login</el-button>
        <!-- <router-link
          to="/"
          class="header item"
        >
          <img
            class="ui mini image"
            src="./assets/tupian.gif"
          >
          &nbsp;
          Okta-Vue Sample Project
        </router-link>
        <router-link
          to="/messages"
          class="item"
          id="messages-button"
          v-if="authenticated"
        >
          <i
            aria-hidden="true"
            class="mail outline icon">
          </i>
          Messages
        </router-link>
        <router-link
          to="/profile"
          class="item"
          id="profile-button"
          v-if="authenticated"
        >
        Profile
        </router-link>
        <router-link
          to="/"
          id="logout-button"
          class="item"
          v-if="authenticated"
          v-on:click.native="logout()"
        >
        Logout
        </router-link> -->
      </div>
    </div>
    <div
      class="ui text container"
    >
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return { authenticated: false }
  },
  created () { this.isAuthenticated() },
  watch: {
    // Everytime the route changes, check for auth status
    '$route': 'isAuthenticated'
  },
  methods: {
    async isAuthenticated () {
      this.authenticated = await this.$auth.isAuthenticated()
    },
    login () {
      this.$auth.loginRedirect('/')
    },
    async logout () {
      await this.$auth.logout()
      await this.isAuthenticated()
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style lang="scss">
// @import './styles/global.scss'

/* 解决element-ui的table表格控件表头与内容列不对齐问题 */
.el-table th.gutter {
  display: table-cell !important;
  width: 10px !important;
}
.el-range-editor--small.el-input__inner {
  width: 100%;
}
.fixed {
  position: fixed;
  top: 0;
  left: 50%;
  width: 100px;
  height: 100px;
  z-index: 9;
}
</style>
