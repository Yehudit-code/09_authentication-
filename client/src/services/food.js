const {httpGet} = require('./http')

const getFood = () => {
  return httpGet('/food')
}

module.exports = { getFood }