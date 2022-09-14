import * as jwt from 'jsonwebtoken';
import connection from '../models/connection';
import UsersModel from '../models/UsersModel';
import { IToken } from '../interfaces/TokenInterface';
import { JWT_SECRET } from '../helpers';

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
    await this.model.createUser(username, classe, level, password);

    const token = await this.login(username, password);

    return token as unknown as IToken;
  }

  public async login(username: string, password: string): Promise<IToken> {
    const result = await this.model.login(username, password);

    const token = jwt.sign(
      { userId: result.id },
      JWT_SECRET,
      { algorithm: 'HS256', expiresIn: '1d' },
    );

    return token as unknown as IToken;
  }
}

export default UsersService;