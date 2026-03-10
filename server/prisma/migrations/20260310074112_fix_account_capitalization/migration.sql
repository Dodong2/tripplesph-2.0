/*
  Warnings:

  - You are about to drop the column `AccessTokenExpiresAt` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "AccessTokenExpiresAt",
ADD COLUMN     "accessTokenExpiresAt" TIMESTAMP(3);
