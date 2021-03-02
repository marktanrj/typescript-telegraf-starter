import { Telegraf, Context } from "telegraf";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env.example",
});

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

bot.command("start", (ctx: Context) => {
  ctx.reply("Hello world!");
});

bot.launch();
