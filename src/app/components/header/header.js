import { html, render } from 'lit-html';
import './header.scss';

export default class Header {
  constructor(selector) {
    this.headerEl = document.querySelector(selector);
    this.title = this.headerEl.getAttribute('data-title');
  }

  template() {
    return html`
      <header>
        <h4>${this.title}</h4>
      </header>
    `;
  }

  load() {
    render(this.template(), this.headerEl);
  }
}
