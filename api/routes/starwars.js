const starWarNames = require('starwars-names')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')
// create color document
const createStarWarName = starwarscharactername => ({
  id: uuid.v4(),
  name: starwarscharactername,
  value: null
})

const starwars = map(createStarWarName, starWarNames.all)

module.exports = app => {
  app.get('/starwars', (req, res) => {
    res.send(starwars)
  })
}
