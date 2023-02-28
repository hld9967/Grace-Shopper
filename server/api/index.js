const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
<<<<<<< HEAD
=======
// router.use('/products', require('./products'))
router.use('/armors', require('./armors'))
router.use('/potions', require('./potions'))
router.use('/skills', require('./skills'))
router.use('/spells', require('./spells'))
router.use('/travels', require('./travels'))
router.use('/weapons', require('./weapons'))
>>>>>>> 48802df72ca079997a14c4ac228541020e62d039

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
