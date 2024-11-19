<!-- 好好学习天天向上 -->
<!-- Class 与 Style 绑定 -->

<script setup lang="ts">


//绑定 HTML class:
//内联字面量形式：:class="{ active: isActive, error: hasError }" 起的什么术语名啊……😴
// const isActive = ref(true)
// const hasError = ref(false)

// //绑定一个对象  （绑对象 不是😋
// const classObject = reactive({
//     active: true,
//     'text-danger': false
// })

// //绑定一个 计算属性的对象 
// const isActive = ref(true)
// let error = ref(null)
// const classObject = computed(() => ({
//     active: isActive.value,
//     'text-danger': error.value && error.value.type === 'fatal'
// }))


// const activeClass = ref('active')
// const errorClass = ref('text-danger')
// const isActive = ref(false)


// 绑定内联样式
// const activeColor = ref('red')
// const fontSize = ref(30)

//使用对象绑定：
const styleObject = reactive({
    color: 'red',
    fontSize: '30px'
})


async function doSomething() {

    //写的乱七八糟……
    // console.log(error.value == null)
    // console.log(!error.value)
    // console.log('\r\n')
    // // hasError.value = !hasError.value
    // if (error.value == null) {
    //     error.value = { type: 'fatal' }
    // } else {
    //     error.value = { type: 'success' }
    // }

    // isActive.value = !isActive.value


}

</script>


<template>

    <!-- <div class="static" :class="{ active: isActive, error: hasError }">我是一个div啊</div> -->
    <!-- 决定 active 类(class)样式是否生效 取决于 isActive变量的值  -->
    <!-- <div class="static" :class="{ active: isActive, 'text-danger': hasError }">我是一个div啊</div> -->
    <!-- 决定 text-danger 类（class）样式是否生效 取决于 hasError变量的值 -->
    <!-- <div class="static" :class="classObject">我是一个div啊</div> -->

    <!--绑定数组 以渲染多个class-->
    <!-- <div :class="[activeClass, errorClass]">我是一个div啊</div>
    <div :class="[isActive ? activeClass : '', errorClass]">我也是一个div啊</div>
     -->

    <!-- 在数组中嵌套对象：优不优雅我不知道，感觉可读性不高啊？：🤐 -->
    <!-- <div :class="[{ [activeClass]: isActive }, errorClass]">俺也也是一个div啊</div>  -->
    <!-- <div :class="[{ activeClass: isActive }, errorClass]">俺也也是一个div啊</div> -->
    <!-- this is an error syntax. don't understand -->

    <!-- color属性取决于 activeColor变量的值  fontSize 属性 取决于 变量 fontSize的值(再拼接 "px" 字符串) -->
    <!-- <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">我是一个div啊</div> -->
    <div :style="styleObject">我是一个div啊</div>
    <van-divider />
    <van-divider />

    <VanButton type="primary" round block @click="doSomething">
        第四课-Class 与 Style 绑定
    </VanButton>

</template>


<style lang="less" scoped>
.active {
    color: #969799;
    font-weight: 800;
    font-size: 20px;
    line-height: 16px;
    margin-top: 10px;
}

.error {
    background-color: red;
    font-size: 26px;
}

.text-danger {
    background-color: black;
    font-size: 30px;
}
</style>
