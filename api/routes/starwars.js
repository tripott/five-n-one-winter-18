const starWarNames = require('starwars-names')
const { map, keys, prop, append } = require('ramda')
const uuid = require('uuid')
// create color document
const createStarWarName = starwarscharactername => ({
  id: uuid.v4(),
  name: starwarscharactername,
  value: null
})

var starwars = map(createStarWarName, starWarNames.all)

module.exports = app => {
  app.get('/starwars', (req, res) => {
    res.send(starwars)
  })

  app.post('/starwars', (req, res) => {
    starwars = append(createStarWarName(req.body.name), starwars)
    res.send({ ok: true })
  })
}
