const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
// router.use('/products', require('./products'))
router.use('/armors', require('./armors'))
router.use('/potions', require('./potions'))
router.use('/skills', require('./skills'))
router.use('/spells', require('./spells'))
router.use('/travels', require('./travels'))
router.use('/weapons', require('./weapons'))


