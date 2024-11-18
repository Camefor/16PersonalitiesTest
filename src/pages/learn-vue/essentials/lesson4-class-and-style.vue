<!-- 好好学习天天向上 -->
<!-- Class 与 Style 绑定 -->

<script setup lang="ts">

//内联字面量形式：:class="{ active: isActive, error: hasError }" 起的什么术语名啊……😴
// const isActive = ref(true)
// const hasError = ref(false)

// //绑定一个对象  （绑对象 不是😋
// const classObject = reactive({
//     active: true,
//     'text-danger': false
// })


//绑定一个 计算属性的对象 

const isActive = ref(true)
let error = ref(null)
const classObject = computed(() => ({
    active: isActive.value && !error.value,
    'text-danger': error.value && error.value.type === 'fatal'
}))


async function doSomething() {
    console.log(error.value == null)
    console.log(!error.value)
    // hasError.value = !hasError.value
    if (error.value == null) {
        error.value = { type: 'fatal' }
    } else {
        error = ref(null)
    }
}

</script>


<template>

    <!-- <div class="static" :class="{ active: isActive, error: hasError }">我是一个div啊</div> -->
    <!-- 决定 active 类(class)样式是否生效 取决于 isActive变量的值  -->

    <!-- <div class="static" :class="{ active: isActive, 'text-danger': hasError }">我是一个div啊</div> -->
    <!-- 决定 text-danger 类（class）样式是否生效 取决于 hasError变量的值 -->

    <div class="static" :class="classObject">我是一个div啊</div>

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
