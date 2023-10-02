import { html } from 'lit';
import '../src/week5-card.js';

export default {
  title: 'Week5Card',
  component: 'week5-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <week5-card
      style="--week5-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </week5-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
