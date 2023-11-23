const tokenKey = 'xxScreenToken'
export const setToken = val => {
  sessionStorage.setItem(tokenKey, val)
}
export const getToken = val => {
  sessionStorage.getItem(tokenKey)
}
export const removeToken = val => {
  sessionStorage.removeItem(tokenKey)
}
