import { Version3Client as Jira } from 'jira.js';
import { jiraConfig as config } from './config.js';

export const client = new Jira(config);
