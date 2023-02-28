'use strict'

const {db, models: {User, Product} } = require('../server/db')
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

  const products = await Promise.all([
    Product.create({ 
      name:'Light Armor',
      imageUrl: 'https://preview.redd.it/9lm0vpsmke361.jpg?auto=webp&s=d585fe32c9bda9d357e2e93f8bb3954372b64be9',
      description: 'lorem Ipsum',
      price: 30
    }),
    Product.create({ 
      name:'Medium Armor',
      imageUrl: 'https://i.pinimg.com/originals/83/fe/10/83fe1081dd6d6c44843ecb7989bf9c9a.jpg',
      description: 'lorem Ipsum',
      price: 30
    }),
    Product.create({ 
      name:'Heavy armor',
      imageUrl: 'https://i.pinimg.com/originals/98/65/ba/9865bab2a3a928eb54164138d87d2852.jpg',
      description: 'lorem Ipsum',
      price: 30
    }),
    Product.create({ 
      name:'Noble Sword',
      imageUrl: 'https://cdn1.epicgames.com/ue/product/Screenshot/screenshot005-1920x1080-bc6e318fd4f514e8a373463ff0431238.png?resize=1&w=1920',
      description: 'lorem Ipsum',
      price: 40
    }),
    Product.create({ 
      name:'Brutal Axe',
      imageUrl: 'https://media.sketchfab.com/models/65d3d36f255a4aa7a2e85ad526233d1e/thumbnails/ee1129c4ca1e4c8d869686cca86ba046/817329dd7c7d4e0c88776abc75755da2.jpeg',
      description: 'lorem Ipsum',
      price: 40
    }),
    Product.create({ 
      name:'Mighty Hammer',
      imageUrl: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/a05a39db-b9cd-40ec-8594-80f41461998a.jpg',
      description: 'lorem Ipsum',
      price: 40
    }),
    Product.create({ 
      name:'Fire Staff',
      imageUrl: 'https://cdnb.artstation.com/p/assets/images/images/028/528/243/large/shamsi-evans-195.jpg?1594737949',
      description: 'lorem Ipsum',
      price: 50
    }),
    Product.create({ 
      name:'Ice Staff',
      imageUrl: 'https://i.pinimg.com/736x/06/23/17/06231779573c815ee682e780c0b0acf9--ice.jpg',
      description: 'lorem Ipsum',
      price: 50
    }),
    Product.create({ 
      name:'Lightning Staff',
      imageUrl: 'https://i.pinimg.com/originals/ff/9d/80/ff9d80626655ae3b4f0c8be81a39d104.png',
      description: 'lorem Ipsum',
      price: 50
    }),
    Product.create({ 
      name:'Map Narnia',
      imageUrl: 'https://img.cdn-pictorem.com/uploads/collection/Q/QG8KTJ7OBI/900_Mihai_Narnia_map.jpg',
      description: 'lorem Ipsum',
      price: 60
    }),
    Product.create({ 
      name:'Map of Thedas',
      imageUrl: 'https://static.wikia.nocookie.net/dragonage/images/9/9b/Worldofthedasmap.jpg/revision/latest?cb=20130109232244',
      description: 'lorem Ipsum',
      price: 60
    }),
    Product.create({ 
      name:'Map of the Hyrule',
      imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/85043400-f2c2-4594-97e9-61c3ffcd403e/dax1ihg-507ad175-bc5d-4703-a479-c46e0b4abf54.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg1MDQzNDAwLWYyYzItNDU5NC05N2U5LTYxYzNmZmNkNDAzZVwvZGF4MWloZy01MDdhZDE3NS1iYzVkLTQ3MDMtYTQ3OS1jNDZlMGI0YWJmNTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UR2SJJxfyCeGWNzfrZR3wirknD1JDWVl0j2JoydXSQY',
      description: 'lorem Ipsum',
      price: 60
    }),
    Product.create({ 
      name:'Healing Potion',
      imageUrl: 'https://cdn1.epicgames.com/ue/product/Screenshot/Render5-1920x1080-74582b776f64e2a548ed9bc47cbd4d1b.png?resize=1&w=1920',
      description: 'lorem Ipsum',
      price: 80
    }),
    Product.create({ 
      name:'Mana Potion',
      imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7f5f3ab-2b08-4ac5-9a85-c3073a8dfae2/d8xw454-d90ea71a-4bff-4424-bd35-cfe7e0fa3c93.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3ZjVmM2FiLTJiMDgtNGFjNS05YTg1LWMzMDczYThkZmFlMlwvZDh4dzQ1NC1kOTBlYTcxYS00YmZmLTQ0MjQtYmQzNS1jZmU3ZTBmYTNjOTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.49Cqr8cXNXVMSAcgpRCFIfXAErTEB6nd3BFXY9Rhw4c',
      description: 'lorem Ipsum',
      price: 80
    }),
    Product.create({ 
      name:'Teleportation Crystal',
      imageUrl: 'https://static.wikia.nocookie.net/finalfantasy/images/8/89/D012_Teleport_Stone.png/revision/latest?cb=20121006224929',
      description: 'lorem Ipsum',
      price: 80
    })
]);

  console.log(`seeded ${users.length} users`)
  console,log(`seeded ${products.length} products`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    },
    products: {
      lightArmor: products[0],
      mediumArmor: products[1],
      heavyArmot: products[2],
      nobleSword: products[3],
      brutalAxe: products[4],
      mightyHamer: products[5],
      fireStaff: products[6],
      iceStaff: products[7],
      lightningStaff: products[8],
      mapOfNarnia: products[9],
      mapOfThades: products[10],
      mapOfNarnia: products[11],
      healingPotion: products[12],
      manaPotion: products[13],
      teleCrystal: products[14]
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
