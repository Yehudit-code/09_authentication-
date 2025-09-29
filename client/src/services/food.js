const {httpGet} = require('./http')

const getFood = () => {
  return httpGet('http://localhost:3000/api/food')
}
const getFood2 = () => {
  return httpGet('http://localhost:3000')
}

module.exports = { getFood, getFood2 }