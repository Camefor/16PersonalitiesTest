<!-- 好好学习天天向上 -->

<script setup lang="ts">
import { queryProse } from '@/api'

const messages = ref<string>('')

const rawHtml = ref<string>('<span style="color: red">This should be red.</span>')
const dynamicId = ref<number>(0)
const dynamicClass = ref<string>('hi')
const isButtonDisabled = ref<boolean>(false)
//绑定多个值
var objectOfAttrs = ref<object>({
    id: 0,
    class: 'c1',
    style: 'font-size:12'
})

const someUrl = ref<string>('https://google.com')

var attributeName = ref<string>('href') //属性名称 (attribute name)
var eventName = 'dblclick' //dbclick other events


function pull() {
    queryProse().then(({ code, result }) => {
        if (code === 0)
            messages.value = result
    })
}

function doSomething() {
    showNotify({ type: 'warning', message: '别挨我!🙃' });
}

function testClick() {
    // dynamicId.value += 1;
    // dynamicId.value = undefined;
    // dynamicClass.value = 'c' + dynamicId.value

    // isButtonDisabled.value = !isButtonDisabled.value;

    objectOfAttrs.value = {
        id: dynamicId.value += 1,
        class: 'c' + dynamicId.value,
        style: 'font-size:' + dynamicId.value
    }
}

</script>

<template>
    <div class="data-label">
        {{ $t('mock.fromAsyncData') }}
    </div>

    <div class="data-content bg-white dark:bg-[--van-background-2]">
        <div v-if="messages">
            {{ messages }}
        </div>
        <VanEmpty v-else :description="$t('mock.noData')" />
    </div>

    <van-space class="m-10" direction="vertical" fill>
        <VanButton type="primary" round block @click="pull">
            {{ $t('mock.pull') }}
        </VanButton>
        <VanButton type="default" round block @click="messages = ''">
            {{ $t('mock.reset') }}
        </VanButton>
    </van-space>

    <van-divider />

    <!-- <div>
        <p>Using text interpolation 显示文本:{{ rawHtml }} </p>
        <p>Using v-html directive 显示html : <span v-html="rawHtml"></span></p>
    </div> -->

    <!-- <div v-bind:id="dynamicId">hello vue3</div> -->
    <!-- <div :id="dynamicId">hello vue3</div> -->
    <!-- <div :class="dynamicClass">hello vue3</div> -->
    <!-- <button :disabled="isButtonDisabled">我是一个button</button> -->
    <!-- <VanButton type="default" :disabled="isButtonDisabled" >我也是一个button</VanButton> -->

    <!-- <div v-bind="objectOfAttrs">我是一个div</div> -->


    <!-- <div>
        需要“参数”的指令
        <a :href="someUrl">我是一个超链接</a>
    </div> -->


    <!-- <div>
        <a v-on:click="doSomething">我是一个超链接</a>
    </div> -->
    <!-- 简写  v-on 有一个相应的缩写，即 @ 字符。-->
    <!-- <a @click="doSomething">我是一个超链接</a> -->

    <!-- 就是动态设置属性(attbibute的) 优雅呀😂-->
    <!-- <a v-bind:[attributeName]="someUrl">我是一个超链接</a>   -->

    <a v-on:[eventName]="doSomething">我是一个超链接 </a>
    <van-divider />

    <VanButton type="default" round block @click="testClick">
        随便测试
    </VanButton>
</template>


<style lang="less" scoped>
.c1 {
    background-color: rgb(57, 30, 210);
}

.c2 {
    background-color: rgb(139, 0, 93)
}

.c3 {
    background-color: rgb(255, 174, 0)
}

.c4 {
    background-color: rgb(105, 105, 105);
}

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
