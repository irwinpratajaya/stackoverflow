<template lang="html">
  <form action="#">
    <div class="imgcontainer">
      <img src="https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png" alt="Avatar" class="avatar">
    </div>

    <div class="container">
      <label><b>Username</b></label>
      <input type="text" placeholder="Enter Username" v-model="username" required>

      <label><b>Password</b></label>
      <input type="password" placeholder="Enter Password" v-model="password" required>


      <button type="submit" v-on:click="login">SignIn</button>
    </div>

    <span>or</span>

    <div class="container" style="background-color:#f1f1f1">
       <a href="http://localhost:8080/register">SignUp</a>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      var self = this;
      axios.post('http://localhost:3000/users/login', {
        username: this.username,
        password: this.password
      })
        .then(function (response) {
          if (response.data) {
            // console.log(response.data);
            localStorage.setItem('token', response.data)
            window.location.href = "http://localhost:8080"
            // self.$router.go('http://localhost:8080')
          } else {
            console.log(response);
            self.$router.go('/login')
          }

        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}

</script>

<style lang="css">
</style>
