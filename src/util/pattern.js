/**
 * This regex will match Jira ticket numbers in the notation `jira://XXX-NNNN`
 * where X is [a-zA-Z] and NNNN are all numbers in the range [0-9].
 */
export const JiraTicketIdPattern = /jira:\/\/[a-zA-Z-]*[0-9]*/gm;
