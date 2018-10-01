import { html, render } from 'lit-html';
import Router from '../../core/routes';
import './button.scss';

export default class Header {
  constructor(selector) {
    this.router = new Router();
    this.btnEl = document.querySelector(`${selector}`);
    this.href = this.btnEl.getAttribute('data-href');
    this.text = this.btnEl.innerText;
  }

  template() {
    return html`
      <button @click=${() => this.router.go(this.href)}>
        ${this.text}
      </button>
    `;
  }

  load() {
    render(this.template(), this.btnEl);
  }
}
