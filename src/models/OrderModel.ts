import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interfaces/OrderInterface';

class OrdersModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const [result] = await this.connection.execute(
      `
        SELECT
          o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
        FROM
          Trybesmith.Orders as o
            INNER JOIN 
          Trybesmith.Products AS p
        ON o.id = p.orderId
        GROUP BY o.id
        ORDER BY o.userId
      `,
    );
    return result as IOrder[];
  }

  public async createOrderAndUpdateProducts(productsIds: Array<number>, userId: number) {
    const [result] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.Orders (id, userId) VALUES (default, ?)
    `, [userId]);
    const { insertId } = result;

    productsIds.forEach((async (productId) => {
      await this.connection.execute(`
        UPDATE Trybesmith.Products
        SET
          orderId = ?
        WHERE id = ?
      `, [insertId, productId]);
    }));
  }

  public async createOrderReturn(productsIds: Array<number>, userId: number): Promise<IOrder> {
    await this.createOrderAndUpdateProducts(productsIds, userId);

    const [result] = await this.connection.query(`
    SELECT
        o.userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM
        Trybesmith.Orders as o
          INNER JOIN 
        Trybesmith.Products AS p
      WHERE o.userId = ? AND p.id IN (?)
      GROUP BY o.id
      ORDER BY o.userId
  `, [userId, productsIds]);

    return (result as RowDataPacket[])[0] as IOrder;
  }
}

export default OrdersModel;