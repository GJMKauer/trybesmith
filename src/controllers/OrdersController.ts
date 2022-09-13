import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersService from '../services/OrderService';

class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAllOrders = async (req: Request, res: Response) => {
    const result = await this.ordersService.getAllOrders();
    return res.status(StatusCodes.OK).json(result);
  };
}

export default OrdersController;