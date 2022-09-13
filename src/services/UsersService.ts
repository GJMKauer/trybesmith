import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import connection from '../models/connection';
import UsersModel from '../models/UsersModel';
import IToken from '../interfaces/TokenInterface';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'heyisma';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async createUser(
    username: string,
    classe: string,
    level: number,
    password: string,
  ): Promise<IToken> {
    const result = await this.model.createUser(username, classe, level, password);
    const token = Jwt.sign(
      { id: result.id },
      JWT_SECRET,
      { algorithm: 'HS256', expiresIn: '1d' },
    );

    return { token };
  }
}

export default UsersService;