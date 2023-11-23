import request from '@/utils/request'
import { getToken, setToken } from '@/config/token'
import { searchParams, queryParams } from '@/utils/urlInfo'
const urlProxy = '/drsp-auth'
const ticketUrl = '/api/auth/ssoLogin'
const devUrl = '/api/auth/ssoLogin/dev'
const productCode = 'drspQinCun'
// 获取地址栏?后面的参数
const haveTicket = searchParams?.ticket || queryParams?.ticket
// 免登
const singleSign = async (tel) => {
  if (getToken()) return true

  try {
    const { message } = await request({
      url: urlProxy + (haveTicket ? ticketUrl : devUrl),
      data: {
        ticket: haveTicket,
        userName: haveTicket ? null : tel,
        systemCode: productCode,
        productCode: productCode
      }
    })

    setToken(message.token)
    sessionStorage.setItem('userInfo', JSON.stringify(message.userInfo))
    return true
  } catch (error) {
    console.warn(error)
    return false
  }
}

export default singleSign
