/**
 * App initialisation configuration for Slackbot.
 * 
 * @type {import("@slack/bolt").AppOptions}
 */
export const slackbotConfig = {
	port: process.env.SLACK_PORT,
	token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN
};
