import { html, render } from 'lit-html';
import Router from '../../core/routes';
import './button.scss';

export default class Header {
  constructor(selector) {
    this.btnEl = document.querySelector(`app-button${selector}`);
    this.text = this.btnEl.getAttribute('data-text');
    this.href = this.btnEl.getAttribute('data-href');
  }

  click() {
    this.btnEl.addEventListener('click', () => {
      new Router().go(this.href);
    });
  }

  template() {
    return html`
      <button>${this.text}</button>
    `;
  }

  load() {
    render(this.template(), this.btnEl);
    this.click();
  }
}
