const {httpGet} = require('./http')

const getFood = () => {
  return httpGet('http://localhost:3000/api/food')
}

module.exports = { getFood }