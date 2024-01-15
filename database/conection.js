import { MongoClient } from "mongodb";

const url = "mongodb://localhost:5000";
const client = new MongoClient(url);
const url2 = "mongodb://localhost:5001";
const client2 = new MongoClient(url2);
const url3 = "mongodb://localhost:5002";
const client3 = new MongoClient(url3);

let users;
let products;
let sales;

const connect = async () => {
  await client.connect();
  await client2.connect();
  await client3.connect();

  users = client.db("users");
  products = client2.db("products");
  sales = client3.db("sales");

  return { users, products, sales };
};

// Ejecuta la función connect de inmediato
connect();

export default connect;
