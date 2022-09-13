import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/ProductInterface';

class ProductsModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createProduct(name: string, amount: string): Promise<IProduct> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [data] = result;
    const { insertId } = data;
    return { id: insertId, name, amount };
  }
}

export default ProductsModel;