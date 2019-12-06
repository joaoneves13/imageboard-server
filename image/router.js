const { Router } = require('express')
const Image = require('./model')
const router = new Router()

router.get('/image', (req, res) => {
    Image.findAll()
    .then(images => res.send(images))
    .catch(console.error)
})

router.post('/image', (req, res, next) => {
    Image.create(req.body)
    .then(image => res.json(image))
    .catch(err => next(err))
})

module.exports = router