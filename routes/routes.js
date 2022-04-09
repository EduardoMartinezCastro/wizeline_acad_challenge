const express = require('express')
const axios = require('axios')

const router = express.Router()


router.get('/', (req, res) => {
    res.send('<h1>This is the root endpoint</h1>')
})

//This is the 'Hello world' endpoint
router.get('/hello-world', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

//My chosen endpoint to consume the Rick and Morty characters API
//Sends the response in JSON format if it founds a character by ID, or a text message with 404 if it doesn't  
router.get('/rick-n-morty-chr/:id', (req, res) => {
    let characterId = req.params.id
    axios.get('https://rickandmortyapi.com/api/character/' + characterId)
        .then(response => {
            res.send(response.data)
        }).catch((error) => {
            res.status(404).send('<h1>The character with the ID: ' + characterId + ' does not exists</h1>')
        })

})

//An endpoint that catches invalid URLs
router.get('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>')
})


module.exports = router