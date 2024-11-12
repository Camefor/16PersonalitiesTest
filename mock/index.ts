import prose from './modules/prose.mock'
import user from './modules/user.mock'
import mbti from './modules/mbti.mock'

//导出 mock 模块
export default {
  ...prose,
  ...user,
  ...mbti
}
