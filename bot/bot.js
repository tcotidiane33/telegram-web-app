const { Telegraf } = require("telegraf");
const TOKEN = "6445094207:AAE5AqlctyhsBUiQ0OMuM0mv0R4BfEl0TF8";
const bot = new Telegraf(TOKEN);

const web_link = "https://https://www.matts.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :) Chief <3 ", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
