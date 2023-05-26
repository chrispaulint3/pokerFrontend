<script>
import XAIHeader from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import {url} from "../script/url"

export default {
  components: { XAIHeader, Footer },
  mounted() {
    this.axios.post("/login/", { baseURL: url }).then((response) => {
      if (response.data.stateCode == 1) {

        this.usrName = response.data.usrName
        this.$store.state.loginState.isLogin = true
      }
      else {
        this.$store.state.loginState.isLogin = false
      }

    })
  },
  data() {
    return {
      usrName: null,
      usrPassword: null,
      inCorrect:false,
    }
  },
  methods: {
    login: function () {
      this.axios.post("/login/", { baseURL: url, usrName: this.usrName, usrPassword: this.usrPassword }).then((response) => {
        if (response.data.stateCode === 1) {
          this.inCorrect = false,
          this.$store.state.loginState.isLogin = true
          this.$router.push('/task')
        }
        else{
          this.inCorrect = true
        }
      })

    }
  },

}
</script>

<template>
  <XAIHeader :loginActive="true"></XAIHeader>
  <div class="container">
    <div>
      <div class="row mt-5">
        <h3 class="text-center">现在登录</h3>
      </div>

      <div class="row mt-3">
        <div class="col-4 mx-auto">
          <div v-if="inCorrect" class="alert alert-primary" role="alert">
            您输入的用户名或密码不正确
          </div>
        </div>

      </div>
      <div class="row mt-3">
        <div class="col-4 mx-auto">
          <label class="form-label">用户名</label>
          <input v-model="usrName" type="text" class="form-control" required>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-4 mx-auto">
          <form>
            <label class="form-label">密码</label>
            <input v-model="usrPassword" type="password" class="form-control" placeholder="请输入密码" autocomplete="off"
              required>
          </form>
        </div>
      </div>

      <div class=" row mt-3">
        <div class="col-4 d-grid mx-auto">
          <button @click="login" class="btn btn-primary">登录</button>

          <span class="form-text">
            <a href="/register">如果您没有注册，点此注册</a>
          </span>

        </div>
      </div>
    </div>
  </div>
</template>
