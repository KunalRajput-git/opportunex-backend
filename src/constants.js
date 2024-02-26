require("dotenv").config();

const CONNECTION_URL = `mongodb+srv://${process.env.NODE_MONGODB_CLUSTER_USER}:${process.env.NODE_MONGODB_CLUSTER_PASSWORD}@opportunxdbcluster.qnbptmq.mongodb.net/${process.env.NODE_MONGODB_CLUSTER_USER}`;
const PORT = process.env.PORT || 4000;
const JWT_EXPIRATION_TIME = "24h";

module.exports = {
  PORT,
  CONNECTION_URL,
  JWT_EXPIRATION_TIME,
};
