<script>
import XAIHeader from "../components/Header.vue"
export default {
  components: { XAIHeader }
}
</script>

<template>
  <XAIHeader></XAIHeader>
  <div class="container">
    <h1 class="text-center mt-5">关于任务</h1>

    <h2>实验设定</h2>
    <div class="fs-5 fontProperty">
    <p>假设你是一个北京房地产中介商，需要对你手下的房产进行估值，准确的估值表示你洞悉市场的真实行情，人工智能辅助系统根据2013-2018年北京房产数据对您进行辅助决策。
       除此之外，我们利用可解释技术对智能系统生成的结果进行解释，您可以利用您已有的知识、人工智能辅助系统给出的建议以及解释信息进行决策。</p>
    <p>本实验不会收集您的隐私信息，您可以随时退出该实验。</p>
  </div>

    <div class="row">
      <h2>实验指引</h2>
      <p class="lead">实验报酬根据您预测的价格与房屋真实价格的误差来给出，如果您的预测误差低于人工智能辅助决策系统与真实值得误差，您可以获得双倍奖励</p>
      <ol class="fs-5 fontProperty">
        <li>
          注册账号。
        </li>
        <li>
          登录自己的账号。
        </li>
        <li>
          点击导航栏上方的量表，点击自满潜在因素量表，填入的姓名与注册名称相同，完成后继续点击导航栏上方的量表，填写人机混合系统信任量表，提交量表。
        </li>

        <figure class="figure mt-3">
          <img src="../assets/Instruction2.jpeg" class="img-fluid">
          <figcaption class="figure-caption text-center">图1 界面示意图</figcaption>
        </figure>

        <li>
          进入任务页面，进行实验，前五个任务为预实验任务，根据前五个实验了解该实验平台。第6到15个任务，在界面右上角的可解释层选择模块上选择第一层级，提交第15个任务后填写NASA-TLX量表
          第16到第25个任务使用第二层可解释层，提交第25各个实验后填写NASA-TLX量表，第26-35使用第三层，完成第35个实验后填写NASA-TLX量表。
        </li>
        <figure class="figure mt-3">
          <img src="../assets/Instruction.jpeg" class="img-fluid">
          <figcaption class="figure-caption text-center">图2 界面示意图</figcaption>
        </figure>
        <li>
          在正式开始实验之后（进行第6个任务时正式开始），综合您自己的预测和人工智能辅助决策系统给出的预测，在输入框内填写您对房屋价值的估计值，并且拖动滑动条来选择系统的结论给您的参考价值，和您有多大程度上信任该系统，
          全部选择完成后，点击下一轮任务，在综合决策模块右上角可以看到实验进度，完成总共35轮实验，实验结束。
        </li>
        <li>实验结束后再次点击导航栏上方的量表，填写人机混合系统信任量表。填写完量表后实验完成。</li>
        <li>实验完成后与主试联系，登记得分，记录报酬</li>
      </ol>
    </div>


    <h2 class="mt-3">数据集基本信息</h2>

    <figure class="figure">
      <img src="../assets/Figure_1.png" class="img-fluid">
      <figcaption class="figure-caption text-center">图2 房价分布图</figcaption>
    </figure>

    <div class="row">
      <table class="table">
        <caption class="text-center">表1 关键特征统计信息概览</caption>
        <thead class="table-dark">
          <tr style="text-align: left;">
            <th></th>
            <th>总价(单位：万元)</th>
            <th>每平方米价钱(单位：元)</th>
            <th>面积(单位：平方米)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>均值</th>
            <td>349.03</td>
            <td>43530.43</td>
            <td>83.24</td>
          </tr>
          <tr>
            <th>标准差</th>
            <td>230.78</td>
            <td>21709.02</td>
            <td>37.23</td>
          </tr>
          <tr>
            <th>25%</th>
            <td>205.00</td>
            <td>28050.00</td>
            <td>57.90</td>
          </tr>
          <tr>
            <th>50%</th>
            <td>294.00</td>
            <td>38737.00</td>
            <td>74.26</td>
          </tr>
          <tr>
            <th>75%</th>
            <td>425.50</td>
            <td>53819.50</td>
            <td>98.71</td>

          </tr>
        </tbody>
      </table>
    </div>


  </div>
</template>

<style scoped>
.fontProperty{
  font-family: SimSun;
}
</style>
