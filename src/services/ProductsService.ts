import connection from '../models/connection';
import ProductsModel from '../models/ProductsModel';
import IProduct from '../interfaces/ProductInterface';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async createProduct(name: string, amount: string): Promise<IProduct> {
    const result = await this.model.createProduct(name, amount);

    return result;
  }

  public async getAllProducts(): Promise<IProduct[]> {
    const result = await this.model.getAllProducts();
    
    return result;
  }
}

export default ProductsService;