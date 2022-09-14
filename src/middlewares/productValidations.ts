import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  nullName,
  invalidName,
  shortName,
  nullAmount,
  invalidAmount,
  shortAmount,
} from '../helpers';

class ProductValidation {
  public createProductNameV = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;

    if (!name) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: nullName });
    }

    if (typeof name !== 'string') {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: invalidName });
    }

    if (name.length < 3) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: shortName });
    }

    next();
  };

  public createProductAmountV = async (req: Request, res: Response, next: NextFunction) => {
    const { amount } = req.body;

    if (!amount) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: nullAmount });
    }

    if (typeof amount !== 'string') {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: invalidAmount });
    }

    if (amount.length < 3) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: shortAmount });
    }

    next();
  };
}

export default ProductValidation;