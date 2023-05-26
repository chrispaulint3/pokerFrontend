<script>
import XAIHeader from "../components/Header.vue"
import {url} from "../script/url"
export default {
  components: { XAIHeader },
  mounted() {
    this.axios.post("/login/", { baseURL: url }).then((response) => {
      if (response.data.stateCode === 1) {

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
      pass1: null,
      pass2: null,
      regState: {
        stateCode: -1,
        hasReg: false,
      },
    }
  },
  methods: {
    register: function () {
      if (this.pass1 != this.pass2) {
        alert("您两次输入的密码不一致")
      }
      else {
        this.axios.post("/login/register", { baseURL: url, usrName: this.usrName, passWord: this.pass1 }).then((response) => {
          this.regState.stateCode = response.data.regState
        })
      }
      if (this.regState.stateCode == 0) {
        this.regState.hasReg = true
        console.alert("注册成功")
      }
    }
  }
}
</script>


<template>
  <XAIHeader :registerActive="true"></XAIHeader>
  <div class="container">
    <div>
      <div class="row mt-5">
        <h3 class="text-center">免费注册</h3>
      </div>
      <div class="row mt-3">
        <div class="col-4 mx-auto">
          <label class="form-label">用户名</label>
          <div v-if="regState.hasReg" class="alert alert-primary" role="alert">
            您的用户名已经存在，请更换
          </div>
          <input v-model="usrName" type="text" class="form-control" required>
          <span class="form-text">
            用户名只能包含数字和字母
          </span>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-4 mx-auto">
          <label class="form-label">密码</label>
          <input v-model="pass1" type="current-password" class="form-control" required>
          <span class="form-text">
            密码需要8-20个字符
          </span>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-4 mx-auto">
          <label class="form-label">重新输入密码</label>
          <input v-model="pass2" type="new-password" class="form-control" required>
        </div>
      </div>

      <div class=" row mt-3">
        <div class="col-4 d-grid mx-auto">
          <button @click="register" class="btn btn-primary">注册</button>
        </div>
        <div v-if="this.regState.stateCode == 0" class="alert alert-primary" role="alert">
            注册成功，<a href="http://pyjac.work/loginP">点此登录，登录后进入任务</a>
          </div>
      </div>
    </div>
  </div>
</template>