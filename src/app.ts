import express from 'express';
import ProductController from './controllers/ProductsController';
import UserController from './controllers/UsersController';
import OrderController from './controllers/OrdersController';

const productController = new ProductController();
const userController = new UserController();
const ordersController = new OrderController();

const app = express();

app.use(express.json());

app.post('/products', productController.createProduct);
app.get('/products', productController.getAllProducts);
app.post('/users', userController.createUser);
app.get('/orders', ordersController.getAllOrders);

export default app;
