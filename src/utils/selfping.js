const cron = require("node-cron");
const axios = require("axios");
const { ONRENDER_ENDPOINT } = require("../constants");

const selfPing = async () => {
  await axios.get(ONRENDER_ENDPOINT);
};

cron.schedule("*/10 * * * *", selfPing);
