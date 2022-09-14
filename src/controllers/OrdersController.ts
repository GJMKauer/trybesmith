import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwtDecode from 'jwt-decode';
import OrdersService from '../services/OrderService';
import { Token, JwtUser } from '../interfaces/TokenInterface';

class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAllOrders = async (req: Request, res: Response) => {
    const result = await this.ordersService.getAllOrders();

    return res.status(StatusCodes.OK).json(result);
  };

  public createOrder = async (req: Request, res: Response) => {
    const { authorization } = req.headers as Token;
    const { productsIds } = req.body;

    const userData = jwtDecode(authorization) as JwtUser;
    const result = await this.ordersService.createOrder(productsIds, userData.userId);
    
    return res.status(StatusCodes.CREATED).json(result);
  };
}

export default OrdersController;