import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lit-button")
export default class LitButton extends LitElement {
  static styles = css`
    .lit-button {
      position: relative;
      overflow: hidden;
      transition: background 400ms;
      color: #fff;
      background-color: var(--lit-button-bg, #2563eb);
      padding: 0.5rem 1rem;
      font-size: 1rem;
      outline: 0;
      border: 0;
      border-radius: 0.25rem;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }

    .lit-button.secondary {
      background-color: #94a3b8;
    }

    .lit-button.large {
      font-size: 1.25rem;
      padding: 0.75rem 1.25rem;
    }

    .lit-button.small {
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
    }

    .lit-button.ripple {
      background-position: center;
      transition: background 0.8s;
    }

    .lit-button.ripple:hover {
      background: #2563eb radial-gradient(circle, transparent 1%, #2563eb 1%)
        center/15000%;
    }

    .lit-button.ripple:active {
      background-color: #6eb9f7;
      background-size: 100%;
      transition: background 0s;
    }

    .lit-button.secondary.ripple:hover {
      background: #94a3b8 radial-gradient(circle, transparent 1%, #94a3b8 1%)
        center/15000%;
    }

    .lit-button.secondary.ripple:active {
      background-color: #b5d6f1;
      background-size: 100%;
      transition: background 0s;
    }
  `;

  @property({ type: String })
  text: string = "Button";

  @property({ type: Boolean })
  secondary: boolean = false;

  private _emitEvent() {
    this.dispatchEvent(new Event("lit-click"));
  }

  render() {
    return html`<button
      class="lit-button ripple ${this.secondary ? "secondary" : ""}"
      type="button"
      @click=${this._emitEvent}
    >
      ${this.text}
    </button>`;
  }
}
