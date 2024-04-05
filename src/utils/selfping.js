const cron = require("node-cron");
const axios = require("axios");

const selfPing = async () => {
  await axios.get("https://opportunex-backend.onrender.com");
};

cron.schedule("*/10 * * * *", selfPing);
