-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "birthday" TEXT NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contact_email_key" ON "Contact"("email");
