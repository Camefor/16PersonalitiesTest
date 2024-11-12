import { defineMock } from 'vite-plugin-mock-dev-server'
import { builder } from '../util'
import mbtiData from '../mbti.data'

export default defineMock({
  url: '/api/mbtiData',
  delay: 100,
  body: () => {

    //随机返回一个元素
    // const rand = Math.floor(Math.random() * mbtiData.value.length)
    // const prose = mbtiData.value[rand]
    // return builder(prose)

    //返回所有数据
    const prose = mbtiData.value
    return builder(prose)

  },
})
