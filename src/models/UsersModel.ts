import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/UserInterface';

class UsersModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createUser(
    username: string, 
    classe: string, 
    level: number, 
    password: string,
  ): Promise<IUser> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [data] = result;
    const { insertId } = data;
    return { id: insertId, username, classe, level, password };
  }

  public async login(username: string, password: string): Promise<IUser> {
    const [result] = await this.connection.execute<ResultSetHeader>(`SELECT *
        FROM Trybesmith.Users WHERE username = ? AND password = ?`, [username, password]);
    
    return result as unknown as IUser;
  }
}

export default UsersModel;