const buzzwords = require('buzzwords')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

const createWord = b => ({
  id: uuid.v4(),
  name: b,
  value: null
})

const theWords = map(createWord, buzzwords)

module.exports = app => {
  app.get('/buzzwords', (req, res) => {
    res.send(theWords)
  })
}
