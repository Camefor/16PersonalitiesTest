<script setup lang="ts">
import { queryMbtiData } from '@/api'
import type { PickerColumn } from 'vant'
import useAppStore from '@/stores/modules/app'
import { languageColumns, locale } from '@/utils/i18n'

const appStore = useAppStore()
const checked = ref<boolean>(isDark.value)

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
watch(
  () => isDark.value,
  (newMode) => {
    checked.value = newMode
  },
  { immediate: true },
)

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



function toggle() {
  toggleDark()
  appStore.switchMode(isDark.value ? 'dark' : 'light')
}

const { t } = useI18n()

const showLanguagePicker = ref(false)
const languageValues = ref<Array<string>>([locale.value])
const language = computed(() => languageColumns.find(l => l.value === locale.value).text)

function onLanguageConfirm(event: { selectedOptions: PickerColumn }) {
  locale.value = event.selectedOptions[0].value as string
  showLanguagePicker.value = false
}

const menuItems = computed(() => ([
  // { title: t('menus.mockGuide'), route: 'mock' },
  // { title: t('menus.echartsDemo'), route: 'charts' },
  // { title: t('menus.unocssExample'), route: 'unocss' },
  // { title: t('menus.persistPiniaState'), route: 'counter' },
  // { title: t('menus.keepAlive'), route: 'keepalive' },
  // { title: t('menus.404Demo'), route: 'unknown' },
]))
</script>

<template>
  <VanCellGroup :title="t('menus.basicSettings')" :border="false" :inset="true">
    <VanCell center :title="t('menus.darkMode')">
      <template #right-icon>
        <VanSwitch v-model="checked" size="20px" aria-label="on/off Dark Mode" @click="toggle()" />
      </template>
    </VanCell>

    <VanCell is-link :title="t('menus.language')" :value="language" @click="showLanguagePicker = true" />
  </VanCellGroup>
  <!-- 
  <VanCellGroup :title="t('menus.exampleComponents')" :border="false" :inset="true">
    <template v-for="item in menuItems" :key="item.route">
      <VanCell :title="item.title" :to="item.route" is-link />
    </template>
  </VanCellGroup>
 -->

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

  <van-popup v-model:show="showLanguagePicker" position="bottom">
    <van-picker v-model="languageValues" :columns="languageColumns" @confirm="onLanguageConfirm"
      @cancel="showLanguagePicker = false" />
  </van-popup>
</template>

<route lang="json">{
  "name": "home",
  "meta": {
    "title": "主页",
    "i18n": "menus.home"
  }
}</route>
