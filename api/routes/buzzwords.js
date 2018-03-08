const buzzwords = require('buzzwords')
const { map, keys, prop, propOr, append } = require('ramda')
const uuid = require('uuid')

const createWord = b => ({
  id: uuid.v4(),
  name: b,
  value: null
})

var theWords = map(createWord, buzzwords)

module.exports = app => {
  app.get('/buzzwords', (req, res) => {
    res.send(theWords)
  })

  app.post('/buzzwords', (req, res) => {
    const newBuzzword = propOr(null, 'body', req)

    if (newBuzzword) {
      theWords = append(createWord(newBuzzword.name), theWords)
      res.send({ ok: true })
    } else {
      res.status(400).send({ ok: false })
    }
  })
}
