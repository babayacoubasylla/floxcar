import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Admin Test',
      email: 'admin@test.com',
      password: 'password123',
      role: 'SUPER_ADMIN',
    },
  })
  console.log('Utilisateur créé :', user)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })