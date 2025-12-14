import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';

const meta: Meta = {
  title: 'Generated/Badge Component',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'neutral', 'warning', 'danger'],
    },
    pill: {
      control: 'boolean',
    },
    pulse: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => html`
    <sl-badge variant=${args.variant}>Badge</sl-badge>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <sl-badge variant="primary">Primary</sl-badge>
      <sl-badge variant="success">Success</sl-badge>
      <sl-badge variant="neutral">Neutral</sl-badge>
      <sl-badge variant="warning">Warning</sl-badge>
      <sl-badge variant="danger">Danger</sl-badge>
    </div>
  `,
};

export const Pill: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <sl-badge variant="primary" pill>Primary</sl-badge>
      <sl-badge variant="success" pill>Success</sl-badge>
      <sl-badge variant="neutral" pill>Neutral</sl-badge>
      <sl-badge variant="warning" pill>Warning</sl-badge>
      <sl-badge variant="danger" pill>Danger</sl-badge>
    </div>
  `,
};

export const Pulse: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <sl-badge variant="primary" pulse>1</sl-badge>
      <sl-badge variant="success" pulse>2</sl-badge>
      <sl-badge variant="neutral" pulse>3</sl-badge>
      <sl-badge variant="warning" pulse>4</sl-badge>
      <sl-badge variant="danger" pulse>5</sl-badge>
    </div>
  `,
};

export const Numbers: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <sl-badge variant="primary">1</sl-badge>
      <sl-badge variant="success">12</sl-badge>
      <sl-badge variant="neutral">99+</sl-badge>
      <sl-badge variant="warning">NEW</sl-badge>
      <sl-badge variant="danger" pill>Hot</sl-badge>
    </div>
  `,
};