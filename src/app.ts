import express from 'express';
import ProductController from './controllers/ProductsController';
import UserController from './controllers/UsersController';
import OrderController from './controllers/OrdersController';
import LoginValidation from './middlewares/loginValidations';
import ProductValidation from './middlewares/productValidations';
import UserValidation from './middlewares/userValidations';
import TokenValidation from './middlewares/tokenValidations';
import OrderValidation from './middlewares/orderValidations';

const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();
const loginValidation = new LoginValidation();
const productValidation = new ProductValidation();
const userValidation = new UserValidation();
const tokenValidation = new TokenValidation();
const orderValidation = new OrderValidation();

const app = express();

app.use(express.json());

app.post('/login', loginValidation.loginV, userController.login);
app.get('/products', productController.getAllProducts);
app.get('/orders', orderController.getAllOrders);
app.post(
  '/users',
  userValidation.createUserUsernameV,
  userValidation.createUserLevelV,
  userValidation.createUserPasswordV,
  userValidation.createUserClasseV,
  userController.createUser,
);
app.post(
  '/products',
  productValidation.createProductNameV,
  productValidation.createProductAmountV,
  productController.createProduct,
);
app.post(
  '/orders',
  tokenValidation.tokenV,
  orderValidation.orderV,
  orderController.createOrder,
);

export default app;
