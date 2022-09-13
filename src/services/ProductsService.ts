import connection from '../models/connection';
import ProductModel from '../models/ProductsModel';
import IProduct from '../interfaces/ProductInterface';

class ProductsService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async createProduct(name: string, amount: string): Promise<IProduct> {
    const result = await this.model.createProduct(name, amount);
    return result;
  }
}

export default ProductsService;