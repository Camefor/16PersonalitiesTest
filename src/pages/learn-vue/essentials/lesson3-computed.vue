<!-- 好好学习天天向上 -->
<!-- 计算属性 -->



<script setup lang="ts">

const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})

//定义 声明一个 计算属性 ref
const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})
//方法实现 替代计算属性
function calcBooksMessage() {
    return author.books.length > 0 ? 'Yes' : 'No'
}

/**
 * 计算属性和方法不同点
 * 计算属性依赖于其响应式的依赖更新才会重新计算 否则 使用属性值的时候 一直获取的是缓存。如果响应式依赖的值（例如是一个很大的list ）如果list咩有更新 那就使用缓存的值以优化性能
 * 方法每次调用都会实时计算，获取新的结果。
 */


//可写计算属性（带setter访问）：

const firstName = ref('John')
const lastName = ref('Doe')

//1、默认计算属性：
// const fullName = computed(() => firstName.value + ' ' + lastName.value)

//2、可读可写(get set) 计算属性: 就是C#里面的 自动属性，getter setter访问器。学过C# 这个很好理解啊！😏
const fullName = computed({
    get() {
        return firstName.value + ' ' + lastName.value
    },
    set(newValue) {
        [firstName.value, lastName.value] = newValue.split(' ')
    }
})


async function doSomething() {
    fullName.value = 'Rhys Wang' // Vue warn：Write operation failed: computed value is readonly
}


</script>


<template>

    <p>Has published books:</p>

    <!-- 利用表达式进行的实现: -->
    <!-- <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span> -->

    <!-- 使用计算属性： -->
    <!-- <span>{{ publishedBooksMessage }}</span> -->

    <!-- 使用方法 -->
    <!-- <span>{{ calcBooksMessage() }}</span> -->


    <p> see name： {{ fullName }}</p>
    <van-divider />
    <van-divider />

    <VanButton type="primary" round block @click="doSomething">
        第三课-计算属性
    </VanButton>

</template>


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
