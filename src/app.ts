import express from 'express';
import ProductController from './controllers/ProductsController';
import UserController from './controllers/UsersController';

const productController = new ProductController();
const userController = new UserController();

const app = express();

app.use(express.json());

app.post('/products', productController.createProduct);
app.get('/products', productController.getAllProducts);
app.post('/users', userController.createUser);

export default app;
