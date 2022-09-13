import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/ProductsService';

class ProductsController {
  constructor(private productService = new ProductService()) { }

  public createProduct = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
  
    const result = await this.productService.createProduct(name, amount);
    return res.status(StatusCodes.CREATED).json(result);
  };

  public getAllProducts = async (req: Request, res: Response) => {
    const result = await this.productService.getAllProducts();
    return res.status(StatusCodes.OK).json(result);
  };
}

export default ProductsController;