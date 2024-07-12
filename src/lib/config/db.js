const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');

dotenv.config();

let storedClient;

const DATABASE_URL = process.env.DATABASE_URL || "";

const prismaClient = require('@prisma/client');
module.exports = { ...prismaClient };

module.exports.client = async function() {
   if (!storedClient) {
      storedClient = new PrismaClient({ datasources: { db: { url: DATABASE_URL } } });
   }
   return storedClient;
};