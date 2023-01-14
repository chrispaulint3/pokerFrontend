<script>
import Header from "../components/Header.vue"
import Chart from "../components/Chart.vue"
import axios from "axios"

export default {
  components: { Header, Chart },
  name: 'MainTask',
  data(){
    return{
     clientId:1,
     clientData:2,
     test:"这是个模板"
    }
  },
  methods: {
    nextClient: function () {
      console.log("hello")
      axios.get("http://127.0.0.1:8000/client/1").then((response)=>{
        this.clientData = response.data
      })
    }
  }

}
</script>

<template>
  <Header></Header>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">用户信息模块</h5>
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
                  <td>hhhh</td>
                </tr>
              </tbody>
            </table>
            <button type="button" @click="nextClient" class="btn btn-primary">Primary</button>
          </div>
        </div>
      </div>

      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">系统信息模块</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>