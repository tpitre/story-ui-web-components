import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

const meta: Meta = {
  title: 'Shoelace/Card',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    showImage: { control: 'boolean' },
    showFooter: { control: 'boolean' },
  },
  render: (args) => html`
    <sl-card style="max-width: 340px;">
      ${args.showImage ? html`
        <img
          slot="image"
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          alt="Norway fjord"
        />
      ` : ''}
      <div slot="header">
        <strong>${args.title}</strong>
      </div>
      ${args.description}
      ${args.showFooter ? html`
        <div slot="footer" style="display: flex; gap: 8px;">
          <sl-button variant="primary">Learn More</sl-button>
          <sl-button variant="default">Cancel</sl-button>
        </div>
      ` : ''}
    </sl-card>
  `,
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a basic card component with some descriptive text content.',
    showImage: false,
    showFooter: false,
  },
};

export const WithImage: Story = {
  args: {
    title: 'Norway Fjord Adventures',
    description: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway.',
    showImage: true,
    showFooter: true,
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card with Actions',
    description: 'A card with action buttons in the footer.',
    showImage: false,
    showFooter: true,
  },
};
