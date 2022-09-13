import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import connection from '../models/connection';
import UsersService from '../services/UsersService';
import UsersModel from '../models/UsersModel';
import { nullUsername, nullPassword, invalidData } from '../helpers';

class LoginValidation {
  public model: UsersModel;

  constructor(private usersService = new UsersService()) {
    this.model = new UsersModel(connection);
  }

  public login = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: nullUsername });
    }

    if (!password) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: nullPassword });
    }

    const findUser = await this.model.login(username, password);

    if (!findUser.length) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: invalidData });
    }

    next();
  };
}

export default LoginValidation;