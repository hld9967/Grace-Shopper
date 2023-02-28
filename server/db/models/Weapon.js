const Sequelize = require('sequelize')
const db = require('../db')

const Weapon = db.define('weapon', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
        notEmpty: true
      }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://cdn5.vectorstock.com/i/1000x1000/64/04/game-asset-pack-fantasy-icon-set-with-magic-items-vector-33196404.jpg',
},
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
},
price: {
    type: Sequelize.STRING(10),
    allowNull: false,
    validate: {
      min: 1,
      max: 99
    }
}
})

module.exports = Weapon;