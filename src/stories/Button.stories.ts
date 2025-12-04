import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '@shoelace-style/shoelace/dist/components/button/button.js';

const meta: Meta = {
  title: 'Shoelace/Button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'neutral', 'warning', 'danger', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    outline: { control: 'boolean' },
    pill: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  render: (args) => html`
    <sl-button
      variant=${args.variant}
      size=${args.size}
      ?outline=${args.outline}
      ?pill=${args.pill}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
    >
      ${args.label}
    </sl-button>
  `,
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'medium',
    outline: false,
    pill: false,
    disabled: false,
    loading: false,
  },
};

export const Success: Story = {
  args: {
    label: 'Success Button',
    variant: 'success',
    size: 'medium',
    outline: false,
    pill: false,
    disabled: false,
    loading: false,
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Button',
    variant: 'warning',
    size: 'medium',
    outline: false,
    pill: false,
    disabled: false,
    loading: false,
  },
};

export const Danger: Story = {
  args: {
    label: 'Delete',
    variant: 'danger',
    size: 'medium',
    outline: false,
    pill: false,
    disabled: false,
    loading: false,
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    variant: 'primary',
    size: 'medium',
    outline: true,
    pill: false,
    disabled: false,
    loading: false,
  },
};

export const Pill: Story = {
  args: {
    label: 'Pill Button',
    variant: 'primary',
    size: 'medium',
    outline: false,
    pill: true,
    disabled: false,
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading...',
    variant: 'primary',
    size: 'medium',
    outline: false,
    pill: false,
    disabled: false,
    loading: true,
  },
};
