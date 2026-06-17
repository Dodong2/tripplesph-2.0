-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Tag" ADD VALUE 'DIGITAL_COMMUNICATION';
ALTER TYPE "Tag" ADD VALUE 'MODERN_STORYTELLING';
ALTER TYPE "Tag" ADD VALUE 'AUDIENCE_BEHAVIOR';
ALTER TYPE "Tag" ADD VALUE 'VISUAL_STORYTELLING';
ALTER TYPE "Tag" ADD VALUE 'TRENDS';
