import { html, render } from 'lit-html';
import { Header, Button } from '../../components';
import './contacts.scss';

export default class Contact {
  constructor(selector) {
    this.contactsEl = document.querySelector(selector);
    this.headerTitle = 'Contacts';
    this.buttonText = 'Home';
    this.href = '/';
  }

  template() {
    return html`
      <div>
        <app-header id="header1" data-title=${this.headerTitle}></app-header>
        <app-button id="button1" data-href=${this.href}>
          ${this.buttonText}
        </app-button>
      </div>
    `;
  }

  load() {
    render(this.template(), this.contactsEl);
    new Header('#header1').load();
    new Button('#button1').load();
  }
}
