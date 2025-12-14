import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

const meta: Meta = {
  title: 'Generated/Button Variants',
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
    outline: {
      control: 'boolean',
    },
    pill: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    outline: false,
    pill: false,
    disabled: false,
  },
  render: (args) => html`
    <sl-button
      variant=${args.variant}
      size=${args.size}
      ?outline=${args.outline}
      ?pill=${args.pill}
      ?disabled=${args.disabled}
    >
      Button
    </sl-button>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <sl-button variant="default">Default</sl-button>
      <sl-button variant="primary">Primary</sl-button>
      <sl-button variant="success">Success</sl-button>
      <sl-button variant="neutral">Neutral</sl-button>
      <sl-button variant="warning">Warning</sl-button>
      <sl-button variant="danger">Danger</sl-button>
      <sl-button variant="text">Text</sl-button>
    </div>
  `,
};

export const OutlineVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <sl-button variant="default" outline>Default</sl-button>
      <sl-button variant="primary" outline>Primary</sl-button>
      <sl-button variant="success" outline>Success</sl-button>
      <sl-button variant="neutral" outline>Neutral</sl-button>
      <sl-button variant="warning" outline>Warning</sl-button>
      <sl-button variant="danger" outline>Danger</sl-button>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <sl-button variant="primary" size="small">Small</sl-button>
      <sl-button variant="primary" size="medium">Medium</sl-button>
      <sl-button variant="primary" size="large">Large</sl-button>
    </div>
  `,
};

export const PillButtons: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <sl-button variant="default" pill>Default</sl-button>
      <sl-button variant="primary" pill>Primary</sl-button>
      <sl-button variant="success" pill>Success</sl-button>
      <sl-button variant="neutral" pill>Neutral</sl-button>
      <sl-button variant="warning" pill>Warning</sl-button>
      <sl-button variant="danger" pill>Danger</sl-button>
    </div>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <sl-button variant="primary">
        <sl-icon slot="prefix" name="cart"></sl-icon>
        Add to Cart
      </sl-button>
      <sl-button variant="success">
        <sl-icon slot="prefix" name="check-circle"></sl-icon>
        Confirm
      </sl-button>
      <sl-button variant="danger">
        Delete
        <sl-icon slot="suffix" name="trash"></sl-icon>
      </sl-button>
      <sl-button variant="neutral" circle>
        <sl-icon name="gear"></sl-icon>
      </sl-button>
    </div>
  `,
};

export const DisabledStates: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <sl-button variant="default" disabled>Default</sl-button>
      <sl-button variant="primary" disabled>Primary</sl-button>
      <sl-button variant="success" disabled>Success</sl-button>
      <sl-button variant="warning" disabled>Warning</sl-button>
      <sl-button variant="danger" disabled>Danger</sl-button>
    </div>
  `,
};

export const Loading: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <sl-button variant="primary" loading>Loading</sl-button>
      <sl-button variant="success" loading>Processing</sl-button>
      <sl-button variant="neutral" loading>Please Wait</sl-button>
    </div>
  `,
};