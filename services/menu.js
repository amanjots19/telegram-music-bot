const bot = require('./bot')

let menu = ' 🗨️ Menu\n 🎶Welcome to Music On My Mind Bot 🎶 \nClick on the buttons below to perform actions.';

let menuMarkup = [[{
    text: "Search Music",
    callback_data: "search"
},
{
    text: "About us",
    callback_data: "about"
}]];

module.exports = {
    startmenu: (ctx) => {
        bot.telegram.sendMessage(ctx.chat.id, menu, {
            reply_markup: {
                inline_keyboard: menuMarkup
            }
        })
    },

}