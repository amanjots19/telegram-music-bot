const bot = require('../services/bot')
const { startmenu } = require('../services/menu')

module.exports = () => {

    bot.start(async (ctx) => {
        try {
            console.log("Bot Started")
            let cid = ctx.chat.id;
            // save playlist in redis

            startmenu(ctx)

        } catch (e) {
            throw new Error(e);
        }

    });

    bot.action("about", async (ctx) => {
        try {
          ctx.reply(`Currently I am just a task given by AWIROS, But you never know :p`);
    
        } catch (e) {
          throw new Error(e)
        }
      });

    bot.action("search", async (ctx) => {
        
    })


}