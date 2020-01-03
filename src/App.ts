import { html } from 'htm/preact';
import { Router } from 'preact-router';
import Auth from './modules/auth';

export const App = () => html`
  <${Router}>
    <${Auth} path="/" />
  </${Router}>
`;