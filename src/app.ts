import express from 'express';
import ProductController from './controllers/ProductsController';
import UserController from './controllers/UsersController';
import OrderController from './controllers/OrdersController';
import LoginValidation from './middlewares/loginValidations';
import ProductValidation from './middlewares/productValidations';

const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();
const loginValidation = new LoginValidation();
const productValidation = new ProductValidation();

const app = express();

app.use(express.json());

app.post(
  '/products',
  productValidation.createProductNameV,
  productValidation.createProductAmountV,
  productController.createProduct,
);
app.get('/products', productController.getAllProducts);
app.post('/users', userController.createUser);
app.get('/orders', orderController.getAllOrders);
app.post('/login', loginValidation.login, userController.login);

export default app;
