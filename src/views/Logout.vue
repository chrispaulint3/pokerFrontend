<script>
import XAIHeader from "@/components/Header.vue"
import {url} from "../script/url"
export default {
  components: { XAIHeader },
  data() {
    return {
      usrName: null,
    }
  },
  methods: {
    logout: function () {
      console.log("登出")
      this.axios.post("/login/logout", { baseURL: url }).then(() => {
        this.$store.state.loginState.isLogin = false
        this.$router.push('/loginP')
      })
    }
  },
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
  }

}
</script>


<template>
  <XAIHeader :loginActive="true"></XAIHeader>
  <div class="container">
    <div>
      <div class="row mt-5">
        <h3 class="text-center">退出登录</h3>
        <h4 class="text-center mt-5">您好,{{ usrName }}</h4>
      </div>

      <div class=" row mt-3">
        <div class="col-4 d-grid mx-auto">
          <button @click="logout" class="btn btn-primary">退出登录</button>
        </div>
      </div>
    </div>
  </div>
</template>