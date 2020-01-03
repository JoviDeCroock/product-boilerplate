import { h, render } from 'preact';
import { setPragma } from 'goober';
import normalize from './global/normalizeStyles';
import { App } from './App';

setPragma(h);
normalize();

render(<App />, document.getElementById('root'));
