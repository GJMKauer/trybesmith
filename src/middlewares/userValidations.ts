import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  invalidClasse,
  invalidLevel,
  invalidPassword,
  invalidUsername,
  nullClasse,
  nullLevel,
  nullPassword,
  nullUsername,
  shortClasse,
  lowLevel,
  shortPassword,
  shortUsername } from '../helpers';

class UserValidation {
  public createUserUsernameV = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;

    if (!username) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: nullUsername });
    }

    if (typeof username !== 'string') {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: invalidUsername });
    }

    if (username.length < 3) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: shortUsername });
    }

    next();
  };

  public createUserClasseV = async (req: Request, res: Response, next: NextFunction) => {
    const { classe } = req.body;

    if (!classe) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: nullClasse });
    }

    if (typeof classe !== 'string') {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: invalidClasse });
    }

    if (classe.length < 3) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: shortClasse });
    }

    next();
  };

  public createUserLevelV = async (req: Request, res: Response, next: NextFunction) => {
    const { level } = req.body;

    if (level < 1) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: lowLevel });
    }

    if (!level) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: nullLevel });
    }

    if (typeof level !== 'number') {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: invalidLevel });
    }

    next();
  };

  public createUserPasswordV = async (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;

    if (!password) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: nullPassword });
    }

    if (typeof password !== 'string') {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: invalidPassword });
    }

    if (password.length < 8) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: shortPassword });
    }

    next();
  };
}

export default UserValidation;