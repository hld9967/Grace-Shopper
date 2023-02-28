//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
// const Product = require('./models/Product')
const Armor = require('./models/Armor')
const Potion = require('./models/Potion')
const Skill = require('./models/Skill')
const Spell = require('./models/Spell')
const Travel = require('./models/Travel')
const Weapon = require('./models/Weapon')

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    // Product,
    Armor,
    Potion,
    Skill,
    Spell,
    Travel,
    Weapon
  },
}
