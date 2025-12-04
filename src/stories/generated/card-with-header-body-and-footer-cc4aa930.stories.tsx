import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

const meta: Meta = {
  title: 'Generated/Simple Card',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <sl-card style="max-width: 400px;">
      <div slot="header">
        Card Header
      </div>
      <p>
        This is the main content of the card. It contains body text that provides
        information or details about the subject of the card.
      </p>
      <div slot="footer">
        <sl-button variant="primary">Action Button</sl-button>
      </div>
    </sl-card>
  `,
};

export const WithImage: Story = {
  render: () => html`
    <sl-card style="max-width: 400px;">
      <img
        slot="image"
        src="https://picsum.photos/400/200"
        alt="Card header image"
      />
      <div slot="header">
        Featured Content
      </div>
      <p>
        This card includes an image at the top, making it perfect for showcasing
        visual content alongside descriptive text.
      </p>
      <div slot="footer">
        <sl-button variant="primary">Learn More</sl-button>
      </div>
    </sl-card>
  `,
};

export const MultipleButtons: Story = {
  render: () => html`
    <sl-card style="max-width: 400px;">
      <div slot="header">
        Confirm Action
      </div>
      <p>
        Are you sure you want to proceed with this action? This cannot be undone.
      </p>
      <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
        <sl-button variant="default">Cancel</sl-button>
        <sl-button variant="primary">Confirm</sl-button>
      </div>
    </sl-card>
  `,
};