const bot = require('./services/bot')
var {startmenu} = require('./services/menu')
var actions = require('./src/actions')

require('dotenv').config()

console.log('===========================')
console.log('BOT INITIALIZED')
console.log('===========================')

//initialize start menu
actions();

bot.launch()

console.log("BOT SUCCESSFULLY LAUNCHED");
console.log("TeleGram Name: ThisTrack_bot");


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))