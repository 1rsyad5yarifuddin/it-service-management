import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../app/generated/prisma/client";

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.role.createMany({
    data: [
      { name: "ADMIN" },
      { name: "IT_STAFF" },
      { name: "USER" },
      { name: "LEADERSHIP" },
    ],
    skipDuplicates: true,
  });

  await prisma.unit.createMany({
    data: [
      { name: "IT" },
      { name: "KEPEGAWAIAN" },
      { name: "PROMKES" },
      { name: "ASURANSI PENJAMINAN" },
      { name: "AKUNTANSI" },
      { name: "LOGISTIK" },
      { name: "DOKTER MANAGEMENT" },
      { name: "MANAJER" },
      { name: "RAWAT INAP" },
      { name: "RAWAT JALAN" },
      { name: "PENDAFTARAN RAWAT JALAN" },
      { name: "PENDAFTARAN RAWAT INAP" },
      { name: "FARMASI" },
      { name: "LABORATORIUM" },
      { name: "UNIT GAWAT DARURAT" },
      { name: "OK" },
      { name: "VK" },
      { name: "PERINATOLOGI" },
      { name: "KASIR" },
      { name: "IPSRS" },
      { name: "KESLING" },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
