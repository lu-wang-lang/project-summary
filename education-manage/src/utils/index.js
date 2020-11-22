/**
 * 获取当月日期
*/
function getDate () {
  let now = new Date()
  let year = now.getFullYear()
  let month = now.getMonth() + 1
  let day = new Date(year, month, 0)
  let data = []
  for (let i = 1; i <= day.getDate(); i++) {
    data.push(paddingLeft(month, 2) + '-' + paddingLeft(i, 2))
  }
  return data
}

/**
 * 左边补充0
*/
function paddingLeft (num, length) {
  return (Array(length).join('0') + num).slice(-length);
}
/**
 * 右边补充0
*/
function paddingRight (num, length) {
  return (num + Array(length).join('0')).slice(-length);
}

/*
* 获取随机数
*/
function getRadom (start, end) {
  return parseInt(Math.random(0, 1) * (end - start) * 100)
}

export default {
  getDate,
  paddingLeft,
  paddingRight,
  getRadom,
}