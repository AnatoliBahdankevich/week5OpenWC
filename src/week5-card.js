import { LitElement, html, css } from 'lit';

class Week5Card extends LitElement {
  static styles = css`
    :host {
      width: 350px;
      margin: 10px;
      padding: 15px;
      border: 3px solid black;
      display: block;
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

    .details-button {
      text-decoration: none;
      background-color: #007BFF;
      color: #fff;
      padding: 8px 16px;
      border-radius: 4px;
    }

    .card.toggled-color {
      background-color: grey;
    }

    .details-toggle {
      display: none;
    }

    .details-label {
      cursor: pointer;
      background-color: #007BFF;
      color: #fff;
      padding: 8px 16px;
      border-radius: 4px;
    }

    .description p {
      display: none;
    }

    .details-toggle:checked + .description p {
      display: block;
    }

    @media (max-width: 800px) and (min-width: 500px) {
      .details-button {
        display: inline-block;
      }
    }

    @media (max-width: 500px) {
      :host {
        max-width: 300px;
      }
    }

    @media screen and (max-width: 800px) {
      .details-button {
        display: none;
      }
    }
  `;

  render() {
    return html`
      <h2>Lewis Hamilton</h2>
      <img src="https://a.espncdn.com/i/headshots/rpm/players/full/868.png" alt="Image Description">
      <input type="checkbox" id="details-toggle" class="details-toggle">
      <div class="description">
        <label for="details-toggle" class="details-label">Details</label>
        <p>
          Lewis Hamilton is a British racing legend, renowned for his exceptional skills in Formula 1.
          With numerous world championships to his name, he's a trailblazer both on and off the track.
        </p>
      </div>
    `;
  }

  toggleColor() {
    this.shadowRoot.querySelector('.card').classList.toggle('toggled-color');
  }

  changeText() {
    this.shadowRoot.querySelector('h2').textContent = 'Ohio State';
  }

  deleteCard() {
    const parent = this.parentNode;
    if (parent) {
      parent.removeChild(this);
    }
  }
}

customElements.define('week5-card', Week5Card);