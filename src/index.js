import { config } from 'dotenv';
import { app } from './slackbot/index.js';

config();

(async () => {
  // Start your app
  await app.start(process.env.PORT);

  app.logger.info('⚡️ Bolt app is running!');
})();
