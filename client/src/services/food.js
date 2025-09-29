const {httpGet} = require('./http')

const getFood = () => {
  return httpGet('/food')
}
const getFood2 = () => {
  return httpGet('/')
}

module.exports = { getFood, getFood2 }