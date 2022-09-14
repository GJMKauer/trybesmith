import dotenv from 'dotenv';

dotenv.config();

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'heyisma';

// User Login
const nullUsername = '"username" is required';

const nullPassword = '"password" is required';

const invalidData = 'Username or password invalid';

// Product Creation
const nullName = '"name" is required';

const invalidName = '"name" must be a string';

const shortName = '"name" length must be at least 3 characters long';

const nullAmount = '"amount" is required';

const invalidAmount = '"amount" must be a string';

const shortAmount = '"amount" length must be at least 3 characters long';

// User Creation
const invalidUsername = '"username" must be a string';

const shortUsername = '"username" length must be at least 3 characters long';

const invalidPassword = '"password" must be a string';

const shortPassword = '"password" length must be at least 8 characters long';

const nullClasse = '"classe" is required';

const invalidClasse = '"classe" must be a string';

const shortClasse = '"classe" length must be at least 3 characters long';

const nullLevel = '"level" is required';

const invalidLevel = '"level" must be a number';

const lowLevel = '"level" must be greater than or equal to 1';

// Token Validation

const notFoundToken = 'Token not found';

const invalidToken = 'Invalid token';

// Order Validation

const nullProductsIds = '"productsIds" is required';

const invalidProductsIds = '"productsIds" must be an array';

const shortProductsIds = '"productsIds" must include only numbers';

export {
  JWT_SECRET,
  nullUsername,
  nullPassword,
  invalidData,
  nullName,
  invalidName,
  shortName,
  nullAmount,
  invalidAmount,
  shortAmount,
  invalidUsername,
  shortUsername,
  invalidPassword,
  shortPassword,
  nullClasse,
  invalidClasse,
  shortClasse,
  nullLevel,
  invalidLevel,
  lowLevel,
  notFoundToken,
  invalidToken,
  nullProductsIds,
  invalidProductsIds,
  shortProductsIds,
};