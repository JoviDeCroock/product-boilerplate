import { h, render, hydrate } from 'https://unpkg.com/preact@latest?module';
import htm from 'https://unpkg.com/htm@latest?module';
import { Router } from 'https://unpkg.com/preact-router@latest?module';
import { setPragma } from 'https://unpkg.com/goober@latest?module';

setPragma(h);
window.html = htm.bind(h);

if (document.body.firstChild) {
  hydrate(
    html`
      <div>
        <${Router}>
          <${Auth} />
        </${Router}>
      </div>
    `,
    document.body,
  );
} else {
  render(
    html`
      <div>
        <${Router}>
          <${Auth} />
        </${Router}>
      </div>
    `,
    document.body,
  );
}

