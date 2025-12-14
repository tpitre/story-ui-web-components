import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@shoelace-style/shoelace/dist/components/button/button.js';

const meta: Meta = {
  title: 'Generated/Primary Button',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'neutral', 'warning', 'danger', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
  },
  render: (args) => html`
    <sl-button variant=${args.variant} size=${args.size}>
      Primary Button
    </sl-button>
  `,
};

export const Small: Story = {
  render: () => html`
    <sl-button variant="primary" size="small">
      Small Primary
    </sl-button>
  `,
};

export const Large: Story = {
  render: () => html`
    <sl-button variant="primary" size="large">
      Large Primary
    </sl-button>
  `,
};

export const WithIcon: Story = {
  render: () => html`
    <sl-button variant="primary">
      <sl-icon slot="prefix" name="heart"></sl-icon>
      Primary with Icon
    </sl-button>
  `,
};

export const Loading: Story = {
  render: () => html`
    <sl-button variant="primary" loading>
      Loading Button
    </sl-button>
  `,
};