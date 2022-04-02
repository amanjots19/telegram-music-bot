const { Telegraf } = require('telegraf')
const dotenv = require('dotenv');
dotenv.config();

let bot = new Telegraf(process.env.BOT_TOKEN);

module.exports = bot