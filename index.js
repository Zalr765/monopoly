const TgApi = require('node-telegram-bot-api')

const token = "6525978479:AAF0oIIHVeqv5vQyGdiqpnIsLzjH9bbB-EU";

const bot = new TgApi(token, { polling: true } )


bot.onText(/\/start/, async msg => {

    const chat_id = msg.chat.id;
    bot.sendMessage(chat_id, "Добро пожаловать в игру Монополия Владикавказ")
  
})