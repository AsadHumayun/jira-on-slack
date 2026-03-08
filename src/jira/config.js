/**
 * The configuration for this Jira client
 * 
 * @type {import("jira.js").Config}
 */
export const jiraConfig = {
	host: process.env.JIRA_HOST,
	strictGDPR: process.env.JIRA_STRICT_GDPR.toLowerCase() === 'true' ? true : false,
	authentication: {
		basic: {
			email: process.env.JIRA_AUTH_EMAIL,
			apiToken: process.env.JIRA_AUTH_API_TOKEN,
		},
	},
}
