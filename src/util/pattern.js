/**
 * This regex will match Jira ticket numbers in the notation XXX-NNNN
 * where X is [a-zA-Z] and NNNN are all numbers in the range [0-9].
 */
export const JiraTicketIdPattern = /[a-zA-Z-]*[0-9]/gm;
