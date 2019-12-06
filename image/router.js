const { Router } = require('express')
const Image = require('./model')

const router = new Router()

router.get('/image', (req, res) => {
    Image.findAll()
    .then(images => res.send(images))
    .catch(console.error)
})

module.exports = router