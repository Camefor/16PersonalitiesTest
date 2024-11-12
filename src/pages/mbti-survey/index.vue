<template>
  <div>
    <h2>您更倾向哪种？</h2>
    <div v-if="currentData">
      <h3>问题序号: {{ currentData.no }}</h3>
      <div v-for="(questionItem, index) in currentData.question" :key="index" @click="handleClick(index)">
        <p>{{ questionItem.item }}</p>
      </div>
    </div>
  </div>

  <div v-if="mbtiType">
    <h3>您的MBTI 人格类型:</h3>
    <p>{{ mbtiType }}</p>
  </div>
</template>

<script setup lang="ts">
import { queryMbtiData } from '@/api'

//数据集合
var mbtiData: ModelClass[] = []

//记录用户对每一道题目的选择
var mbtiOptionsArray: string[] = []

//维护当前正在查看的问题内容
var currentIndex = ref<number>(0)
var currentData = ref<ModelClass | null>()


var mbtiType = ref<string>('')


onMounted(() => {

  //init data
  getMbtiData();

})

/**
 * 把问题列表数据初始化
 */
function getMbtiData() {
  queryMbtiData().then(({ code, result }) => {
    if (code === 0) {
      mbtiData = result as ModelClass[]

      //渲染显示第一条数据
      currentData.value = mbtiData[currentIndex.value]

      //let me see…
      // mbtiData.forEach(item => {
      //   console.log('序号:' + item.no)
      //   console.log('Q1: ' + item.question[0].item, '; is ' + item.question[0].option)
      //   console.log('Q2: ' + item.question[1].item, '; is ' + item.question[1].option)
      //   console.log('\r\n')
      // });

    }
  })
}

// 点击事件函数
function handleClick(optionIndex: number) {

  if (currentData.value) {
    mbtiOptionsArray.push(currentData.value.question[optionIndex].option); //记录用户的选择 只记录 MBTI字母

    // 更新当前问题为下一个问题
    if (currentIndex.value < mbtiData.length - 1) {
      currentIndex.value += 1;
      currentData.value = mbtiData[currentIndex.value];
    } else {
      computedMbtiType();
      alert('测完了hhh'); //TODO:换个好看的
    }
  }

}

/**
 * 计算结果 （真优雅的实现）
 */
function computedMbtiType() {

  // debugger

  const counts = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
  };

  // 统计各个选项出现的次数
  mbtiOptionsArray.forEach(option => {
    counts[option] += 1;
  });

  // 计算每个维度的字母
  const EI = counts.E > counts.I ? 'E' : 'I';
  const SN = counts.S > counts.N ? 'S' : 'N';
  const TF = counts.T > counts.F ? 'T' : 'F';
  const JP = counts.J > counts.P ? 'J' : 'P';

  mbtiType.value = EI + SN + TF + JP
}



</script>

<style lang="less" scoped>
.data-label {
  color: #969799;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 10px;
}

.data-content {
  height: 300px;
  padding: 20px;
  line-height: 30px;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>


<!-- 基于文件的路由、
  https://easy-temps.github.io/easy-docs/vue3-vant-mobile/routing -->