const express = require('express');

const router = express.Router();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

router.get('/products', async (req, res, next) => {

    const products = await prisma.product.findMany({
        include: {
            category: true
        }
    });

    const categories = await prisma.category.findMany({
        include: {
            products: true
        }
    });

    res.send({ success: true, products, categories })
});

router.get('/products/:id', async (req, res, next) => {

    const { id } = req.params;
    const product = await prisma.product.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            category: true
        }
    })

    res.send({ success: true, data: product })
});

router.post('/products', async (req, res, next) => {

    const product = await prisma.product.create({
        data: req.body
    })

    res.send({ success: true, data: product })
});

router.patch('/products/:id', async (req, res, next) => {
    const { id } = req.params;
    const product = await prisma.product.update({
        where: {
            id: Number(id)
        },
        data: req.body,
        include: {
            category: true
        }
    })

    res.send({ success: true, data: product })
});

router.delete('/products/:id', async (req, res, next) => {

    const { id } = req.params;
    const product = await prisma.product.delete({
        where: {
            id: Number(id)
        }
    })

    res.send({ success: true, data: product })
});




module.exports = router;
