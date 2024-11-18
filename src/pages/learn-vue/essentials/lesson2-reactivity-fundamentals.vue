<!-- 好好学习天天向上 -->
<!-- 响应式基础 -->

<!-- 如果没有使用 单文件组件 (SFC)  <script setup> 的方式 需要定义 export default {
  // `setup` 
  setup()  
  >
  -->

<!-- 例如: -->
<!-- 第一种  如果没有使用 单文件组件 (SFC)  <script setup> 的方式-->
<!-- <script lang="ts">
export default {
    setup() {
        //some define
        const count = ref(0)
        //some define
        function doSomething() {
            count.value++
        }

        return {
            count, doSomething
        }
    }
}
</script> -->

<!-- 第二种   单文件组件 (SFC) -->

<script setup lang="ts">

// const count = ref(0)
// const obj = ref({
//     nested: { count1: 0 },
//     arr: ['foo', 'bar']

// })

// 响应式基础：😋：
// ref 类似一个对象。里面有 value, getter, setter 字段 ，value是用户定义的类型，（内部值）。getter setter 接收和返回数据。getter 执行track追踪引用这个ref对象的组件(DOM对象), setter中会有trigger执行触发操作
//它是对内部值 value对象的包装

//reactive() API不同 它使对象本身具有响应性：

// const state = reactive({ count: 0 })
// Reactive Proxy vs. Original



const count = ref(0) //value = 0
var state = reactive({
    count //0
})


const otherCount = ref(2)


async function doSomething() {
    // count.value++
    // for (let index = 0; index < 100; index++) {
    //     // obj.value.nested.count1++
    //     obj.value.arr.push('hi bob')
    //     await nextTick()
    // }
    // obj.value.nested.count1++;
    // obj.value.arr.push('hi bob')


    // console.log(count) // RefImpl 
    // console.log(state) // Proxy //代理对象 同时它和原始对象 也不相等

    // console.log(state.count) //0
    // state.count = 1 //count.value = 1
    // console.log(count.value) //1

    //reactive ref 解包好难啊 不想学了 先跳过😵‍💫 以后会再遇到再补充学习
    const books = reactive([ref('Vue 3 Guide')])
    console.log(books[0].value) //没有解包;所以要加.value 才能取值

    const map = reactive(new Map([['count',ref(0)]]))
    console.log(map.get('count').value)
    
}





</script>


<template>

    <!-- //在模板中使用 ref 时，我们不需要附加 .value。为了方便起见，当在模板中使用时，ref 会自动解包 (有一些注意事项)。 -->
    <!-- <div>{{ count }}</div> -->
    <!-- <div>{{ obj.nested.count1 }}</div>
    <div>{{ obj.arr }}</div> -->

<!--
    <button @click="state.count++">
        {{ state.count }}
    </button>
    -->
    
    <van-divider />
    <van-divider />

    <VanButton type="default" round block @click="doSomething">
        随便测试
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
