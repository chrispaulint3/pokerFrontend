<template>
  <div class="card">
    <div class="card-header">
      <slot name="card-header">卡片头</slot>
    </div>
    <div class="card-body">
      <div class="mt-3">
        <label class="form-label">请输入可解释层级</label>
        <select v-model="this.$store.state.explainLevel" class="form-select" aria-label="Default select example">
          <option value="1" selected>层级1</option>
          <option value="2">层级2</option>
          <option value="3">层级3</option>
        </select>
      </div>
    </div>
  </div>
</template>