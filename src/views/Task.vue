<script>
import Header from "../components/Header.vue"

export default{
  components:{Header}
}
</script>

<template>
<Header></Header>
<table class="table">
  <thead>
    <tr>
      <th scope="col">特征</th>
      <th scope="col">值</th>
      <th scope="col">均值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
    </tr>
  </tbody>
</table></template>