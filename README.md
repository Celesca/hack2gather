* Change the prisma/schema.prisma and run the

0. Reset the database schemas

`npx prisma migrate reset`

`npx prisma migrate dev --name init`

1. Create the new migration :

`npx prisma migrate dev --name <migration_name>`

2. Apply the migration to your database 

`npx prisma migrate deploy`

3. Generate the Prisma Client: After running the migration, generate the Prisma Client to reflect the new schema changes

`npx prisma generate` or `prisma generate` via prisma client to change the schemas mapping to SQL

4. The Initialize Data with Seeding Database

`npx prisma db seed`

