<template lang="html">
  <div class="container">
			<div class="row main">
				<div class="main-login main-center">
          <div class="imgcontainer">
            <a href="http://localhost:8080/login"><img src="https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png" style="width:20%;" alt="Avatar" class="avatar"></a>
          </div>
					<form class="" method="post" action="#">

						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label">Your Name</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="name" id="name"  placeholder="Enter your Name"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="email" class="cols-sm-2 control-label">Your Email</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" v-model="email" id="email"  placeholder="Enter your Email"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="username" class="cols-sm-2 control-label">Username</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" v-model="username" id="username"  placeholder="Enter your Username"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="password" class="cols-sm-2 control-label">Password</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" class="form-control" v-model="password" id="password"  placeholder="Enter your Password"/>
								</div>
							</div>
						</div>

						<div class="form-group ">
							<a href="#" type="submit" id="button" v-on:click="register" class="btn btn-primary btn-lg btn-block login-button">Register</a>
						</div>

					</form>
				</div>
			</div>
		</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      var self = this;
      axios.post('http://localhost:3000/users', {
        username: this.username,
        email: this.email,
        password: this.password
      })
        .then(function (response) {
          console.log(response.data);
          self.username = response.data.username
          self.email = response.data.email
          self.password = response.data.password

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
