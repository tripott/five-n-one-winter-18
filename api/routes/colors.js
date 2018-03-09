const csscolorsObj = require('css-color-names')
const uuid = require('uuid')
const {
  map,
  keys,
  append,
  find,
  reject,
  compose,
  equals,
  prop,
  propEq
} = require('ramda')
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

  app.put('/colors/:id', (req, res) => {
    if (!req.body) {
      return res
        .status(500)
        .send({ ok: false, message: 'Color Object Required' })
    }

    colors = map(
      color => (propEq('id', req.params.id, color) ? req.body : color),
      colors
    )
    res.send({ ok: true })
  })

  app.delete('/colors/:id', (req, res) => {
    //colors = reject(c => c.id === req.params.id ,colors)
    colors = reject(compose(equals(req.params.id), prop('id')), colors)
    res.send({ ok: true })
  })
}
