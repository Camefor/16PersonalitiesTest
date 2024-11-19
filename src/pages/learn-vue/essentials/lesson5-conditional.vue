<!-- 好好学习天天向上 -->
<!-- 条件渲染 -->

<script setup lang="ts">

const awesome = ref(true)
const type = ref('')
const ok = ref(true)
const okTips = ref('')
async function doSomething() {
    // awesome.value = !awesome.value

    // let tempTypeArray = ['A', 'B', 'C', 'D']
    // let rand = Math.floor(Math.random() * tempTypeArray.length);
    // type.value = tempTypeArray[rand]

    ok.value = !ok.value
    okTips.value = ok.value ? '我显示出来了' : '我隐藏dom元素了'
}

</script>


<template>

    <!-- <button @click="awesome = !awesome">Toggle</button> -->
    <!-- 
    <h1 v-if="awesome">Vue is awesome</h1>
    <h1 v-else>On no 😢😿 </h1> -->

    <!-- 如果只有一个 v-else 不会被识别：build error -->
    <!-- <h3 v-else> only v-else </h3> -->

    <!-- v-if / v-else-if / v-else 组合： -->
    <!-- <div v-if="type === 'A'">
        A
    </div>
    <div v-else-if="type === 'B'">
        B
    </div>
    <div v-else-if="type === 'C'">
        C
    </div>
    <div v-else>
        Not A/B/C, Maybe is D 🤣
    </div> -->


    <!-- 在模板上使用 v-if else指令： -->
    <template v-if="ok">
        <h2>OK😁</h2>
    </template>
    <template v-else>
        <h2>Not Ok 😥</h2>
    </template>

    <!-- v-show: 会永远渲染DOM元素 不满足条件时 display:none 隐藏元素 但是dom元素是存在的。
         v-if:会真实渲染，满足条件才会渲染元素， 有更高的性能开销。 -->
    <h1 v-bind:自定义的特性="okTips" v-show="ok">Hello I'm Ok😆,我显示出来了 from v-show</h1>

    <van-divider />
    <van-divider />
    <van-divider />
    <van-divider />
    <van-divider />

    <VanButton type="primary" round block @click="doSomething">
        第五课-条件渲染
    </VanButton>

</template>


<style lang="less" scoped></style>
