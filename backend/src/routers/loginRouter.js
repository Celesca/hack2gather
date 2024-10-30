const { Router } = require("express");
const bcrypt = require('bcrypt');
const prisma = require('../db/connection');

const loginRouter = Router();

loginRouter.get("/me", async (req, res) => {
    try {
        const userId = req.session?.userId;
        if (!userId) {
            return res.status(401).json({ error: 'Not authenticated' });
        }

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                description: true,
                school: true,
                degree: true,
                fieldOfStudy: true,
                rating: true
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

loginRouter.post("/register", async (req, res) => {
    const { email, password, firstName, lastName, description, school, degree, fieldOfStudy } = req.body;

    if (!email || !password || !firstName || !lastName) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const existingUser = await prisma.user.findUnique({
        where: { email }
    });

    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            firstName,
            lastName,
            description,
            school,
            degree,
            fieldOfStudy
        }
    });

    res.json(user);
});


loginRouter.post("/login", async (req, res) => {
    res.json({
        message: "Login successful",
    });
});

module.exports = loginRouter;