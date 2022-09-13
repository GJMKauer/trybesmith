import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/UsersService';

class UsersController {
  constructor(private usersService = new UsersService()) { }

  public createUser = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
  
    const token = await this.usersService.createUser(username, classe, level, password);
    return res.status(StatusCodes.CREATED).json({ token });
  };
}

export default UsersController;