const fortuneCookies = require('fortune-cookie')
const uuid = require('uuid')
const { map, append } = require('ramda')

const createCookie = c => ({
  id: uuid.v4(),
  name: c,
  value: null
})

var cookies = map(createCookie, fortuneCookies)

module.exports = app => {
  app.get('/cookies', (req, res) => {
    res.send(cookies)
  })

  app.post('/cookies', (req, res) => {
    cookies = append(req.body, cookies)
    res.send({ ok: true })
  })
}
