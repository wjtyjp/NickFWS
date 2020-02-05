<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Posts Manager</h1>
    <p>Only authenticated users should see this page</p>

    <ul v-if="posts && posts.length">
	    <li v-for="post in posts" :key='post.title'>
	      <p><strong>{{post.title}}</strong></p>
	      <p>{{post.body}}</p>
	    </li>
	  </ul>
  </div>
</template>
<script>
import axios from 'axios'
 
export default {
  data () {
    return {
      posts: []
    }
  },
  async created () {
    axios.defaults.headers.common['Authorization'] = `Bearer ${await this.$auth.getAccessToken()}`
    try {
      const response = await axios.get(`http://localhost:{serverPort}/api/messages`)
      this.posts = response.data
    } catch (e) {
      console.error(`Errors! ${e}`)
    }
  }
}
</script>