const csscolorsObj = require('css-color-names')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')
const { append, find } = require('ramda')
// create color document
const createColor = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, csscolorsObj)
})

var colors = map(createColor, keys(csscolorsObj))

module.exports = app => {
  app.get('/colors', (req, res) => {
    res.send(colors)
  })

  app.post('/colors', (req, res) => {
    colors = append(
      { id: uuid.v4(), name: req.body.name, value: req.body.value },
      colors
    )
    res.send({ ok: true })
  })

  app.get('/colors/:id', (req, res) => {
    res.send(find(c => c.id === req.params.id, colors))
  })
}
