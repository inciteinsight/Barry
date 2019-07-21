'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'roger.palabasan@baruchmail.cuny.edu',
      password: 'passwordlygeneratedrandom'
    }),
    User.create({
      email: 'inc@inc.com',
      password: '1914'
      // org: 'cni'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

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

if (module === require.main) {
  runSeed()
}

module.exports = {seed}
