/*
  Warnings:

  - You are about to drop the column `calorie` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Process` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `calories` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Follower" DROP CONSTRAINT "Follower_userId_fkey";

-- DropForeignKey
ALTER TABLE "Post_Like" DROP CONSTRAINT "Post_Like_userId_fkey";

-- DropForeignKey
ALTER TABLE "Process" DROP CONSTRAINT "Process_postId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "calorie",
ADD COLUMN     "calories" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Process";

-- DropTable
DROP TABLE "User";
