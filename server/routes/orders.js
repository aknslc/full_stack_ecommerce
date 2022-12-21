import express from 'express'
import {
    getOrders,
    getOrder,
    updateOrder,
    deleteOrder,
    createOrder
} from '../controllers/order.js';
const router = express.Router();

import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

// get Orders
router.get('/', verifyAdmin, getOrders);
// get Order
router.get('/:id', verifyToken, getOrder);
// create Order
router.post('/', verifyUser, createOrder)
// update Order
router.put('/:id', verifyUser, updateOrder);
// delete Order
router.delete('/:id', verifyAdmin, deleteOrder);


export default router;