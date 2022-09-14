import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as jwt from 'jsonwebtoken';
import { Token } from '../interfaces/TokenInterface';
import { notFoundToken, invalidToken, JWT_SECRET } from '../helpers';

class TokenValidation {
  public tokenV = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { authorization } = req.headers as unknown as Token;

      if (!authorization) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: notFoundToken });
      }

      jwt.verify(authorization, JWT_SECRET);
    } catch (error) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: invalidToken });
    }

    next();
  };
}

export default TokenValidation;