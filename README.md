# Hack2gather

## About This Project 

Hack2gather is a new hackathon team finder platform aiming to provide a smooth and user-friendly experience for customers. 
The pain point is sometimes student wants to apply for a hackathon. Unfortunately, they cannot find someone who are passionate in the same thing. Also, hey need to find someone that fits in the role they are missing and that's very hard if he is just a newbie.

## Tech Stack : 

- Frontend - React TypeScript, TailwindCSS
- Backend - Node.js (Express.js), MySQL, Prisma (ORM), Pusher (WebSocket)
- DevOps - SonarQube, Prometheus, Grafana, Github Actions, Husky
- QA - Postman, Manual Testing


---

## Notes to developer of this project

📚 Dear Frontend developer,

please find attached the frontend folder in `/frontend` 
Feel free to install other dependencies but let me know if you are installing one.

Run the code with `npm run dev` because I use Vite.

Don't forget to use `npm run lint` to formatting your code to clean code.

📘 Dear Backend developer, (Including Hongyok, Owen and Kaew)

please find attached the user story in the Backend folder's `Story.MD` to did your works!

Please follow instructions below to open the project 🔖

---

## Instructions for Backend :

1. Cloning this project
`git clone https://github.com/Celesca/hack2gather`

2. Move through directory
`cd hack2gather/backend`

3. Install dependencies
`npm install`

4. Open the MySQL and PhpMyAdmin with docker
`docker-compose up -d`

Docs :

* localhost:3000 - for Backend Server
* localhost:8080 - for PhpMyAdmin
* localhost:3306 - for MySQL database server

## How to change the Prisma schemas

goes to prisma/schema.prisma and run this instructions

1. Reset the database schemas

`npx prisma migrate reset`

2. Create the new migration to databases

`npx prisma migrate dev --name init` or
`npx prisma migrate dev --name <migration_name>`

3. Apply the migration to your database 

`npx prisma migrate deploy`

4. Generate the Prisma Client: After running the migration, generate the Prisma Client to reflect the new schema changes

`npx prisma generate` or `prisma generate` via prisma client to change the schemas mapping to SQL

5. The Initialize Data with Seeding Database

`npx prisma db seed`

