import { h, render, hydrate } from 'preact';
import { html } from 'htm/preact';
import { setPragma } from 'goober';
import { App } from './App';

setPragma(h);

const root = document.getElementById('root');
if (document.body.firstChild && root) {
  hydrate(html`<${App} />`, root);
} else if (root) {
  render(html`<${App} />`, root);
}

