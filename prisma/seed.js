const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const adminRole = await prisma.role.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'Admin',
        },
    });
    const guestRole = await prisma.role.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: 'Guest',
        },
    });
    console.log('Seed planted for roles:', adminRole, guestRole);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error('Error during seeding:', e);
        await prisma.$disconnect();
    });