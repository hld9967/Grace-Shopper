const router = require('express').Router();
const { Travel } = require('../db')
module.exports = router;

router.get('/', async (req, res, next) => {
    try {
        const travels = await Travel.findAll({
            attributes: ['id', 'name', 'imageUrl', 'description', 'price']
        })
        res.json(travels)
    } catch (err) {
        next(err);
    }
})

router.get('/:travelId', async (req, res, next) => {
    try {
      const travel = await Travel.findByPk(req.params.travelId, {
        attributes: ['id', 'name', 'imageUrl', 'description', 'price']
      })
      res.json(travel)
    } catch (err) {
      next(err)
    }
  })