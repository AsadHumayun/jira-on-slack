import { App } from '@slack/bolt';
import { slackbotConfig } from './slackbotConfig';
import { JiraTicketIdPattern } from '../util/index.js';

/**
 * This sample Slack application uses Socket Mode.
 * For the companion getting started setup guide, see:
 * https://docs.slack.dev/tools/bolt-js/getting-started/
 */

export const app = new App(slackbotConfig);

app.message(JiraTicketIdPattern, execute);

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say({
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `Hey there <@${message.user}>!`
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Click Me"
          },
          "action_id": "button_click"
        }
      }
    ],
    text: `Hey there <@${message.user}>!`
  });
});

app.action('button_click', async ({ body, ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(`<@${body.user.id}> clicked the button`);
});
