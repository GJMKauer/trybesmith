import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { nullProductsIds, invalidProductsIds, shortProductsIds } from '../helpers';

class OrderValidation {
  public orderV = async (req: Request, res: Response, next: NextFunction) => {
    const { productsIds } = req.body;

    if (!productsIds) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: nullProductsIds });
    }

    if (!Array.isArray(productsIds)) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: invalidProductsIds });
    }

    if (productsIds.length === 0) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: shortProductsIds });
    }

    next();
  };
}

export default OrderValidation;