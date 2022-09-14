import connection from '../models/connection';
import OrdersModel from '../models/OrderModel';
import IOrder from '../interfaces/OrderInterface';

class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const result = await this.model.getAllOrders();
    
    return result;
  }

  public async createOrder(productsIds: Array<number>, userId: number): Promise<IOrder> {
    const result = await this.model.createOrderTwo(productsIds, userId);

    return result;
  }
}

export default OrdersService;