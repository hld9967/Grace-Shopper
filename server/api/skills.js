const router = require('express').Router();
const { Skill } = require('../db')
module.exports = router;

router.get('/', async (req, res, next) => {
    try {
        const skills = await Skill.findAll({
            attributes: ['id', 'name', 'imageUrl', 'description', 'price']
        })
        res.json(skills)
    } catch (err) {
        next(err);
    }
})

router.get('/:skillId', async (req, res, next) => {
    try {
      const skill = await Armor.findByPk(req.params.skillId, {
        attributes: ['id', 'name', 'imageUrl', 'description', 'price']
      })
      res.json(skill)
    } catch (err) {
      next(err)
    }
  })