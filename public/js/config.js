// api/config.js hoặc bất kỳ server-side file nào
const CONFIG = {
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHAT_ID:   process.env.TELEGRAM_CHAT_ID,
  NOTIFICATION_TYPE:  process.env.NOTIFICATION_TYPE || 'telegram',
  SECRET_KEY:         process.env.SECRET_KEY,
  STORAGE_EXPIRY:     60 * 60 * 1000,
  COUNTDOWN_TIME:     parseInt(process.env.COUNTDOWN_TIME) || 30,
};
