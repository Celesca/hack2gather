import { Router } from "express";

const messageRouter = Router();

messageRouter.get("/messages", async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) {
            return res.status(401).json({ error: 'Not authenticated' });
        }

        const messages = await prisma.message.findMany({
            where: {
                OR: [
                    { senderId: userId },
                    { receiverId: userId }
                ]
            },
            select: {
                id: true,
                senderId: true,
                receiverId: true,
                content: true,
                createdAt: true
            }
        });

        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});