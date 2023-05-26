<script>
export default {
  props: {
    homeActive: {
      type: Boolean,
      default: false
    },
    taskActive: {
      type: Boolean,
      default: false
    },
    helpActive: {
      type: Boolean,
      default: false
    },
    loginActive: {
      type: Boolean,
      default: false
    },
    registerActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Explainable AI</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
          <li class="nav-item">
            <a class="nav-link" :class="{ active: homeActive }" aria-current="page" href="/">主页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: taskActive }" href="/task">任务</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: helpActive }" href="https://github.com/chrispaulint3">博客</a>
          </li>
          <li class="nav-item">
            <a v-if="!this.$store.state.loginState.isLogin" class="nav-link" :class="{ active: loginActive }"
              href="/loginP">登录</a>
            <a v-else class="nav-link" :class="{ active: loginActive }" href="/logout">注销</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: registerActive }" href="/register">免费注册</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              量表
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="https://www.wjx.cn/vm/eZ1CAmz.aspx">人机混合系统信任量表</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="https://www.wjx.cn/vm/hgzT7id.aspx# ">自满潜在因素量表</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="https://www.wjx.cn/vm/m9DR2zj.aspx# ">NASA-TLX</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>