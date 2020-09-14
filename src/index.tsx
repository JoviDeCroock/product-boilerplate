import { h, render } from 'preact';
import { setup } from 'goober';
import normalize from './global/normalizeStyles';
import { App } from './App';

setup(h);
normalize();

const root = document.getElementById('root');
if (root) {
  render(<App />, root);
}
