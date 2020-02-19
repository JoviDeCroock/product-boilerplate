import { h, render } from 'preact';
import { setPragma } from 'goober';
import normalize from './global/normalizeStyles';
import { App } from './App';

setPragma(h);
normalize();

console.log(process.env.API_URL);
console.log(process.env.DEPLOY_URL);

const root = document.getElementById('root');
if (root) {
  render(<App />, root);
}
