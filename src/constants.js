require("dotenv").config();

const CONNECTION_URL = `mongodb+srv://${process.env.NODE_MONGODB_CLUSTER_USER}:${process.env.NODE_MONGODB_CLUSTER_PASSWORD}@opportunxdbcluster.qnbptmq.mongodb.net/${process.env.NODE_MONGODB_CLUSTER_USER}`;
const PORT = process.env.PORT || 4000;
const JWT_EXPIRATION_TIME = "24h";
const MAX_UNAUTHORIZED_PAGES = 1;
const PAGE_SIZE = 5;

module.exports = {
  PORT,
  CONNECTION_URL,
  JWT_EXPIRATION_TIME,
  MAX_UNAUTHORIZED_PAGES,
  PAGE_SIZE,
};
