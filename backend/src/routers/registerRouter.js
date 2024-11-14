const { Router } = require("express");
const bcrypt = require('bcryptjs');
const prisma = require('../db/connection');

const registerRouter = Router();


// registerRouter.post('/register', async (req, res) => {
//     const { firstName, lastName, email, School, Degree, /*EducationLevel, skills, experience, dob,*/ description, password /*, confirmPassword */} = req.body;

//     if (!firstName || !lastName || !email || !School || !Degree /*|| !EducationLevel || !skills || !experience || !dob*/ || !password || /*!confirmPassword*/) {
//         return res.status(400).json({ error: 'All required fields must be filled' });
//     }

//     /*if (password !== confirmPassword) {
//         return res.status(400).json({ error: 'Passwords do not match' });
//     }*/

//     try {
//         const existingUser = await prisma.user.findUnique({ where: { email } });
//         if (existingUser) {
//             return res.status(400).json({ error: 'User already exists' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         await prisma.user.create({
//             data: {
//                 firstName,
//                 lastName,
//                 email,
//                 School,
//                 Degree,
//                 /*EducationLevel,
//                 skills,
//                 experience,
//                 dob: dob ? new Date(dob) : null,
//                 */
//                 description,
//                 password: hashedPassword,
//             },
//         });

        
//     } catch (error) {
//         console.error("Error registering :", error);
//         res.status(500).json({ error: 'Error saving user' });
//     }
// });

    module.exports = registerRouter;