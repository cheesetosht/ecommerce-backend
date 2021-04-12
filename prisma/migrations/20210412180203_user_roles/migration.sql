-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image_path" TEXT NOT NULL
);
INSERT INTO "new_User" ("id", "name", "email", "password", "image_path") SELECT "id", "name", "email", "password", "image_path" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
CREATE UNIQUE INDEX "User.name_email_unique" ON "User"("name", "email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
