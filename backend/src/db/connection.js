const { PrismaClient } = require('@prisma/client')

let prisma

try {
    prisma = new PrismaClient()
} catch (error) {
    console.error('Failed to initialize Prisma Client:', error)
    process.exit(1) // Exit the process with a failure code
}

module.exports = prisma
