const Sequelize = require('sequelize')
const db = require('./db')

const Potion = db.define('potion', {
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
  type: Sequelize.DECIMAL(5,2),
  allowNull: false,
  validate: {
    min: 1,
    max: 100
  }
},
categories:{
   type: Sequelize.STRING,
   allowNull:false,
   defaultValue: "Potion"
}
})

module.exports = Potion;
