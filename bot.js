const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '6445094207:AAE5AqlctyhsBUiQ0OMuM0mv0R4BfEl0TF8';
const webAppUrl = 'https://lecompay.netlify.app/';
const webAppUrlShop = 'https://lecompay.netlify.app/'
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;


  if(text === '/start') {
    await bot.sendMessage(chatId, 'Hello Welcome Chief <3 :) ', {
      reply_markup: {
        keyboard: [
          [{text: 'Open App !', web_app: {url:webAppUrl}}]
        ]
      }
    })
    await bot.sendMessage(chatId, 'Welcome sur la WebApp de pay:) ', {
      reply_markup: {
        keyboard: [
          [{text: ' Go to shop !', web_app: {url:webAppUrlShop}}]
        ]
      }
    })

  }


});
