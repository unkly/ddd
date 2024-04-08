/*
  Warnings:

  - You are about to drop the column `materialId` on the `Post_Material` table. All the data in the column will be lost.
  - You are about to drop the `Material` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Post_Material" DROP COLUMN "materialId";

-- DropTable
DROP TABLE "Material";
