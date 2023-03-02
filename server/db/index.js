//this is the access point for all things database related!

const db = require('./db')

const User = require('./User')
const Product = require('./Product')
const Armor = require('./Armor')
const Potion = require('./Potion')
const Skill = require('./Skill')
const Spell = require('./Spell')
const Travel = require('./Travel')
const Weapon = require('./Weapon')

//associations could go here!

module.exports = {
  db,
    User,
    Product,
    Armor,
    Potion,
    Skill,
    Spell,
    Travel,
    Weapon
}
