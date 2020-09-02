import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@tb-marketplace/common';
import { Item } from '../models/item';

const router = express.Router();

router.post(
  '/api/items',
  requireAuth,
  [
    body('title').not().isEmpty().withMessage('Item title is required'),
    body('price').isFloat({ gt: 0 }).withMessage('Price bust be greater than 0'),
    body('description').not().isEmpty().withMessage('Descrption is required'),
    body('image').not().isEmpty().withMessage('Image is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, price, description, image } = req.body;

    const item = Item.build({
      title,
      price,
      description,
      image,
      userId: req.currentUser!.id,
    });

    await item.save();
    res.status(201).send(item);
  },
);

export { router as createItemRouter };
