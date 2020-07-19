const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Impossible de récupérer les données' })
    } else {
      res.json(results)
    }
  }
})

module.exports = router