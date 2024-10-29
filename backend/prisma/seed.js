const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const user1 = await prisma.user.upsert({
    where: { email: 'user1@example.com' },
    update: {},
    create: {
      First_name: 'John',
      Last_name: 'Doe',
      DOB: new Date('1990-01-01'),
      Email: 'user1@example.com',
      Password: 'securepassword123',
      Description: 'A passionate software developer.',
      School_University: 'MIT',
      Education: 'Bachelor in Computer Science',
      Rating: 5
    },
  })

  const user2 = await prisma.user.upsert({
    where: { email: 'user2@example.com' },
    update: {},
    create: {
      First_name: 'Jane',
      Last_name: 'Doe',
      DOB: new Date('1992-02-02'),
      Email: 'user2@example.com',
      Password: 'anothersecurepassword456',
      Description: 'An experienced project manager.',
      School_University: 'Harvard',
      Education: 'Master in Business Administration',
      Rating: 4
    },
  })

  console.log({ user1, user2 })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })