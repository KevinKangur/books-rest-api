import express from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
const PORT = 3000;
const app = express();

app.get('/books', async (request, response) => {
    try {
        const books = await prisma.books.findMany();
        response.status(200).json(books);
    } catch(error) {
            response.status(404).send({
                message: 'Midagi läks valesti',
                error,
            })
    }
});


app.listen(PORT, () => {
    console.log(`Server listening at port ${ PORT }`);
});
