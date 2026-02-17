import { App } from '@slack/bolt';
import { config } from 'dotenv';
import { Events } from './events/Events';
import { app } from './slackbot/index.js';

config();

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  app.logger.info('⚡️ Bolt app is running!');
})();
