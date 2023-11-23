export const searchParams = window.location.search
  .slice(1)
  .split('&')
  .reduce((prev, cur) => {
    const [key, value] = cur.split('=')
    prev[key] = value
    return prev
  }, {})
const queryStr = window.location.hash.split('?')[1]
export const queryParams = queryStr
  ? queryStr.split('&').reduce((prev, cur) => {
      const [key, value] = cur.split('=')
      prev[key] = value
      return prev
    }, {})
  : {}
