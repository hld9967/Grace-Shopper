const router = require('express').Router()
const { User } = require('../db')


router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username', 'email', 'first', 'last']
    })
    res.json(users);
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: ['id', 'username', 'email', 'first', 'last']
    })
    res.json(user);
  } catch(err) {
    next(err);
  }
})

module.exports = router
