import { LitElement, html, css } from 'lit';

const hamiltonImage = new URL('https://images.ctfassets.net/1fvlg6xqnm65/38dVtZPZ3GgHDqabOUqPDX/7d9cb3fe57de48b4fec7f2182957c59f/Lewis_Hamilton_Header.png', import.meta.url).href;

export class Week5Card extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
      },
      variation: {
        type: Boolean,
        reflect: true,
      },
      information: {
        type: String
      }
    }
  }

  static styles = css`
    :host {
      width: 350px;
      margin: 10px;
      padding: 15px;
      border: 3px solid black;
      display: block;
    }
    :host([variation]) .card {
      background-color: #008aff;
    }

    img {
      width: 100%;
    }

    h2 {
      text-align: center;
    }

    p {
      text-align: center;
    }

  `;
  constructor() {
    super();
    this.name = 'Lewis Hamilton';
    this.description = `Lewis Hamilton is a British racing legend, renowned for his exceptional skills in Formula 1.
          With numerous world championships to his name, he's a trailblazer both on and off the track.`;
    this.colorToggled = false;
  }

  render() {
    return html`
      <section class="card">
        <div class="card-info">
          <h2>${this.name}</h2>
          <img src="${hamiltonImage}" alt="Lewis Hamilton">
          <details class="details">
            <summary>Details</summary>
            <div class="card-details-contents">
              ${this.description}
              <slot></slot>
            </div>
          </details>
        </div>
      </section>
    `;
  }
}


customElements.define('week5-card', Week5Card);

