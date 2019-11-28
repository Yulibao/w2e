const Telegraf = require('telegraf')
const HttpsProxyAgent = require('https-proxy-agent')

const config = require('./config')

const bot = new Telegraf(config.BOT_TOKEN,{
    telegram:{
        agent: new HttpsProxyAgent(config.HTTPS_PROXY)
    }
})


bot.start((ctx) => {
    ctx.reply('Hi !!!')
})

bot.help((ctx) => {
    ctx.reply('I can\'t help you ....')
})

bot.launch()