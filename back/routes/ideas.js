const express = require('express')
const result = require('../helpers/ideas-json')
const router = express.Router()

router.get('/', (req, res) => {
      return res.json(result)
    }
  )


module.exports = router