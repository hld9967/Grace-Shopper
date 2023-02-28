'use strict'

const {db, models: {User, Armor, Potion, Skill, Spell, Travel, Weapon} } = require('../server/db')
// const {db, models: {Product} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123', email: 'cody@fsa.com', first: 'cody', last: 'doe' }),
    User.create({ username: 'murphy', password: '123', email: 'murphy@fsa.com', first: 'murphy', last: 'doe' }),
  ])

  const armors = await Promise.all([
    Armor.create({ 
      name:'Light Armor',
      imageUrl: 'https://preview.redd.it/9lm0vpsmke361.jpg?auto=webp&s=d585fe32c9bda9d357e2e93f8bb3954372b64be9',
      description: 'lorem Ipsum',
      price: 30
    }),
    Armor.create({ 
      name:'Medium Armor',
      imageUrl: 'https://i.pinimg.com/originals/83/fe/10/83fe1081dd6d6c44843ecb7989bf9c9a.jpg',
      description: 'lorem Ipsum',
      price: 30
    }),
    Armor.create({ 
      name:'Heavy armor',
      imageUrl: 'https://i.pinimg.com/originals/98/65/ba/9865bab2a3a928eb54164138d87d2852.jpg',
      description: 'lorem Ipsum',
      price: 30
    }),
  ]);

  const potions = await Promise.all([
    Potion.create({ 
      name:'Healing Potion',
      imageUrl: 'https://cdn1.epicgames.com/ue/product/Screenshot/Render5-1920x1080-74582b776f64e2a548ed9bc47cbd4d1b.png?resize=1&w=1920',
      description: 'lorem Ipsum',
      price: 20
    }),
    Potion.create({ 
      name:'Mana Potion',
      imageUrl: 'https://www.worldanvil.com/uploads/images/fb1209fd22e58fbf60e5725b7d368d1d.jpg',
      description: 'lorem Ipsum',
      price: 20
    }),
    Potion.create({ 
      name:'Speed Potion',
      imageUrl: 'https://cdna.artstation.com/p/assets/images/images/033/595/448/large/artem-fedorchuk-.jpg?1610042289',
      description: 'lorem Ipsum',
      price: 20
    }),
    Potion.create({ 
      name:'Defense Potion',
      imageUrl: 'https://i.pinimg.com/736x/ea/6e/4b/ea6e4bddb93b98283e9614be74e2445d.jpg',
      description: 'lorem Ipsum',
      price: 20
    }),
  ]);

  const skills = await Promise.all([
    Skill.create({ 
      name:'Critical Strike',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4h9iJp0CO0k17g2xY9JgkMG5RB8XAW6cpiw&usqp=CAU',
      description: 'lorem Ipsum',
      price: 70
    }),
    Skill.create({ 
      name:'Savage Sweep',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2VFUACPjq9cyR5UBBVWLTwvFeuB4h6AYrRA&usqp=CAU',
      description: 'lorem Ipsum',
      price: 70
    }),
    Skill.create({ 
      name:'Earth Breaker',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73NNGXjKyyjxmF1Leeo2TPAmqFpfqFAjUrg&usqp=CAU',
      description: 'lorem Ipsum',
      price: 70
    }),
  ]);

  const spells = await Promise.all([
    Spell.create({ 
      name:'Fire Ball',
      imageUrl: 'https://static.wikia.nocookie.net/harrypotter/images/6/6a/IncendioHM.png/revision/latest?cb=20201213233205',
      description: 'lorem Ipsum',
      price: 80
    }),
    Spell.create({ 
      name:'Ice Wind',
      imageUrl: 'https://opengameart.org/sites/default/files/ice_shards.jpg',
      description: 'lorem Ipsum',
      price: 80
    }),
    Spell.create({ 
      name:'Lightning Chain',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jVfC7lXhf8z-zSzBwlWZuHQM8yL2PiAqzQ&usqp=CAU',
      description: 'lorem Ipsum',
      price: 80
    }),
    Spell.create({ 
      name:'Healing Spell',
      imageUrl: 'https://static.wikia.nocookie.net/lastepoch_gamepedia_en/images/4/45/HealingHandIcon.png/revision/latest?cb=20190511131854',
      description: 'lorem Ipsum',
      price: 80
    })
  ]);

  const travels = await Promise.all([
    Travel.create({ 
      name:'Map of Narnia',
      imageUrl: 'https://img.cdn-pictorem.com/uploads/collection/Q/QG8KTJ7OBI/900_Mihai_Narnia_map.jpg',
      description: 'lorem Ipsum',
      price: 60
    }),
    Travel.create({ 
      name:'Map of Thedas',
      imageUrl: 'https://static.wikia.nocookie.net/dragonage/images/9/9b/Worldofthedasmap.jpg/revision/latest?cb=20130109232244',
      description: 'lorem Ipsum',
      price: 60
    }),
    Travel.create({ 
      name:'Map of the Hyrule',
      imageUrl: 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/ce/TAoL_Hyrule_Map_3.png/revision/latest?cb=20180104175707',
      description: 'lorem Ipsum',
      price: 60
    }),
    Travel.create({ 
      name:'Teleportation Crystal',
      imageUrl: 'https://static.wikia.nocookie.net/finalfantasy/images/8/89/D012_Teleport_Stone.png/revision/latest?cb=20121006224929',
      description: 'lorem Ipsum',
      price: 80
    }),
  ]);

  const weapons = await Promise.all([
    Weapon.create({ 
      name:'Heavy armor',
      imageUrl: 'https://i.pinimg.com/originals/98/65/ba/9865bab2a3a928eb54164138d87d2852.jpg',
      description: 'lorem Ipsum',
      price: 30
    }),
    Weapon.create({ 
      name:'Noble Sword',
      imageUrl: 'https://cdn1.epicgames.com/ue/product/Screenshot/screenshot005-1920x1080-bc6e318fd4f514e8a373463ff0431238.png?resize=1&w=1920',
      description: 'lorem Ipsum',
      price: 40
    }),
    Weapon.create({ 
      name:'Brutal Axe',
      imageUrl: 'https://media.sketchfab.com/models/65d3d36f255a4aa7a2e85ad526233d1e/thumbnails/ee1129c4ca1e4c8d869686cca86ba046/817329dd7c7d4e0c88776abc75755da2.jpeg',
      description: 'lorem Ipsum',
      price: 40
    }),
    Weapon.create({ 
      name:'Mighty Hammer',
      imageUrl: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/a05a39db-b9cd-40ec-8594-80f41461998a.jpg',
      description: 'lorem Ipsum',
      price: 40
    }),
    Weapon.create({ 
      name:'Fire Staff',
      imageUrl: 'https://cdnb.artstation.com/p/assets/images/images/028/528/243/large/shamsi-evans-195.jpg?1594737949',
      description: 'lorem Ipsum',
      price: 50
    }),
    Weapon.create({ 
      name:'Ice Staff',
      imageUrl: 'https://i.pinimg.com/736x/06/23/17/06231779573c815ee682e780c0b0acf9--ice.jpg',
      description: 'lorem Ipsum',
      price: 50
    }),
    Weapon.create({ 
      name:'Lightning Staff',
      imageUrl: 'https://i.pinimg.com/originals/ff/9d/80/ff9d80626655ae3b4f0c8be81a39d104.png',
      description: 'lorem Ipsum',
      price: 50
    }),
  ]);

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${armors.length} armors`)
  console.log(`seeded ${potions.length} potions`)
  console.log(`seeded ${skills.length} skills`)
  console.log(`seeded ${spells.length} spells`)
  console.log(`seeded ${travels.length} travels`)
  console.log(`seeded ${weapons.length} weapons`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    },
    armors: {
      lightArmor: armors[0],
      mediumArmor: armors[1],
      heavyArmor: armors[2],
    },
    potions: {
      healingPotion: potions[0],
      manaPotion: potions[1],
      speedPotion: potions[2],
      defensePotion: potions[3]
    },
    skills: {
      criticalStrike: skills[0],
      savageSweep: skills[1],
      earthBreaker: skills[2]
    },
    spells: {
      fireBall: spells[0],
      iceWind: spells[1],
      lightningChain: spells[2],
      healingSpell: spells[3]
    },
    travels: {
      mapOfNarnia: travels[0],
      mapOfThades: travels[1],
      mapOfHyrule: travels[2],
      teleportationCrystal: travels[3]
    },
    weapons: {
      nobleSword: weapons[0],
      brutalAxe: weapons[1],
      mightyHammer: weapons[2],
      fireStaff: weapons[3],
      iceStaff: weapons[4],
      lightningStaff: weapons[5],
    }
  }
};

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
