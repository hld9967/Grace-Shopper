const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
<<<<<<< HEAD
=======
router.use('/products', require('./products'))
>>>>>>> 3d2cadd483e426cc12b64209f49baf33a6f00c79

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
<<<<<<< HEAD
})
=======
})
>>>>>>> 3d2cadd483e426cc12b64209f49baf33a6f00c79
