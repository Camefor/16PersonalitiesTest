<!-- 好好学习天天向上 -->
<!-- 列表渲染 -->

<script setup lang="ts">

//遍历列表/数组
// v-for使用  item in items 语法 就是遍历;  C# 中的 foreach啊😶‍🌫️
const items = ref([{ message: 'Foo', children: [{ message: 'xiao foo' }, { message: 'xiao bob' }] }, { message: 'Bar', children: [{ message: 'xiao bar' }, { message: 'xiao kev' }] }])

//遍历对象的每一个属性
const myObject = reactive({
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10'
})


async function doSomething() {
}

</script>


<template>
    <!-- item in items语法 实际上是一个参数的写法 (item) -->
    <!-- <li v-for="(item) in items">
        {{ item.message }}
    </li> -->

    <!-- 两个参数的写法 增加了一个index  (和数组的 forEach方法很类似)
    item 和 index参数 可以理解为 “范围”变量，“局部”变量 意思就是作用域 只在一个范围内；局部。 （调用 v-for 为父级 ）
    -->

    <!-- <li v-for="(item, index) in items">
        current index is {{ index }}, and value is {{ item.message }}
    </li> -->


    <!-- //多层嵌套v-for(多层for循环) -->
    <!-- <li v-for="item in items">
        <p>Parent:{{ item.message }}. has {{ item.children.length }} childItem</p>
         

        {{ childItem }} //build error  childItem作用域不在这里

        <span v-for="childItem in item.children">
            <p>i'm children: {{ childItem.message }}</p>
        </span>
    </li> -->
    <!-- 也可以使用 item of items 语法 两者等效，of 更符合ECMAScript 标准规范 -->
    <van-divider />
    <van-divider />


    <!-- <ul>
        <li v-for="prop in myObject">
            {{ prop }}
        </li>
    </ul> -->

    <!--这点和遍历列表/数组不同， 第一个参数为属性值，第二个参数为属性名-->
    <!-- <li v-for="(value, key) of myObject">
        {{ key }} : {{ value }}
    </li> -->

    <!-- 三个参数的语法： 对象的属性值，对象的属性名，对象的属性所在对象中的索引位置 -->
    <!-- <li v-for="(value, key, index) in myObject">
        {{ key }} : {{ value }} : {{ index }}
    </li> -->

    <!-- 范围值 从 1 开始 不是0 -->
    <!-- <span v-for="n in 10">
        {{ n }}
    </span> -->

    <!-- 使用v-for 渲染多个元素块 -->
    <ul>
        <template v-for="item in items">
            <li>{{ item.message }}</li>
            <li>
                <van-divider />
            </li>
        </template>
    </ul>

    <van-divider />
    <van-divider />
    <van-divider />

    <VanButton type="primary" round block @click="doSomething">
        第六课-列表渲染
    </VanButton>

</template>


<style lang="less" scoped></style>
