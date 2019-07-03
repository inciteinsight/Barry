'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')

const midyearproc2019 = {
  name: 'Mid-Year Processional 2019',
  sequence: [
    'stanza1',
    'stanza2',
    'refrain',
    'stanza3',
    'stanza4',
    'refrain',
    'stanza5',
    'stanza6',
    'refrain',
    'coda'
  ],
  piece: {
    stanza1: [
      'Great indeed is Your unfailing love',
      'For us, O Lord God',
      'You have guided us and we remain',
      'Your true chosen ones',
      'And this is a special day',
      'In your blessed and dear Church of Christ'
    ],
    stanza2: [
      'Oh we celebrate and bring to You',
      'Thanksgiving and praise',
      'For the blessings and great victories',
      'From your boundless grace',
      'And with You, we overcome',
      'Every hindrance and trial we face'
    ],
    refrain: [
      'Oh, our precious and great election',
      'This, we will never waste, Lord God',
      'A gift received by those redeemed',
      'Saved through the sacrifice of Christ',
      'We will not separate from the right',
      'To worship You, which You bestowed on us'
    ],
    stanza3: [
      'Through fierce persecution, You are there',
      'Defending Your fold',
      'In the darkest hours of our distress',
      'You rescue Your own',
      'O Lord God, You are so good',
      'To your Church, where Your grace is bestowed'
    ],
    stanza4: [
      'Your last mission of salvation grows',
      'Now spanning the globe',
      'Many join to praise and worship you',
      'In reverence Lord',
      'The true chosen who will reap',
      'The reward that You have laid instore'
    ],
    stanza5: [
      "All our efforts, we'll intensify",
      'To help spread the truth',
      'In the work of propagation, Lord',
      'To always bear fruit',
      'So that you are greatly pleased',
      'We will spend all our days serving You'
    ],
    stanza6: [
      'Lord, to Your whole nation, You give heed',
      'And answer our cries',
      'That the church administration, Lord',
      "You'll care for and guide",
      'So that we will all be led',
      'To achieve perfect faith in Your sight'
    ],
    coda: [
      'We will not separate from the right',
      'To worship You, which You bestowed on us',
      'Amen'
    ]
  }
}

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'roger.palabasan@baruchmail.cuny.edu',
      password: 'passwordlygeneratedrandom'
    }),
    User.create({
      email: 'murphy@email.com',
      password: 'passwordlygeneratedrandom'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
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

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
