-- CreateTable
CREATE TABLE "Community" (
    "communityId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "users" TEXT[],

    CONSTRAINT "Community_pkey" PRIMARY KEY ("communityId")
);
