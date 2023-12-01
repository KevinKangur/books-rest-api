import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllBooks = async (request, response) => {
    try {
        const books = await prisma.books.findMany();
        response.status(200).json(books);
    } catch(error) {
            response.status(404).send({
                message: 'Midagi läks valesti',
                error,
            })
    }
};

export const getBookById = async (request, response) => {
    try {
        const book = await prisma.books.findUnique({
            where: {
                id: Number(request.params.id),
            }
        });
        response.status(200).json(book);
    } catch(error) {
            response.status(404).send({
                message: 'Midagi läks valesti',
                error,
            })
    }
};

export const deleteBook = async (request, response) => {
    try {
        const deletedBook = await prisma.books.delete({
            where: {
                id: Number(request.params.id)
            },
        });
        response.status(200).json(deletedBook);
    } catch(error) {
            response.status(404).send({
                message: 'Midagi läks valesti',
                error,
            })
    }
};

export const createBook = async (request, response) => {
    console.log(request.body)
    try {
        const newBook = await prisma.books.create({
            data: { ...request.body },
        })

        response.status(200).json(newBook);
    } catch(error) {
            response.status(404).send({
                message: 'Midagi läks valesti',
                error,
            })
    }
};

export const updateBook = async (request, response) => {
    try {
        const updatedBook = await prisma.books.update({
            where: {
                id: Number(request.params.id),
            },
            data: { ...request.body },
        });
        response.status(200).json(updatedBook);
    } catch(error) {
            response.status(404).send({
                message: 'Midagi läks valesti',
                error,
            })
    }
};