import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

const meta: Meta = {
  title: 'Generated/Input Field',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    clearable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    type: 'text',
    size: 'medium',
    disabled: false,
    clearable: false,
  },
  render: (args) => html`
    <sl-input
      label=${args.label}
      placeholder=${args.placeholder}
      type=${args.type}
      size=${args.size}
      ?disabled=${args.disabled}
      ?clearable=${args.clearable}
    ></sl-input>
  `,
};

export const WithHelpText: Story = {
  render: () => html`
    <sl-input
      label="Email"
      type="email"
      placeholder="your.email@example.com"
      help-text="We'll never share your email with anyone else."
    ></sl-input>
  `,
};

export const Required: Story = {
  render: () => html`
    <sl-input
      label="Username"
      placeholder="Enter username"
      required
    ></sl-input>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <sl-input
      label="Disabled Input"
      placeholder="Cannot edit this"
      value="Disabled value"
      disabled
    ></sl-input>
  `,
};

export const WithIcon: Story = {
  render: () => html`
    <sl-input label="Search" placeholder="Search...">
      <sl-icon name="search" slot="prefix"></sl-icon>
    </sl-input>
  `,
};

export const Clearable: Story = {
  render: () => html`
    <sl-input
      label="Clearable Input"
      placeholder="Type something..."
      value="Clear me"
      clearable
    ></sl-input>
  `,
};

export const Password: Story = {
  render: () => html`
    <sl-input
      label="Password"
      type="password"
      placeholder="Enter your password"
      password-toggle
    ></sl-input>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-input label="Small" size="small" placeholder="Small input"></sl-input>
      <sl-input label="Medium" size="medium" placeholder="Medium input"></sl-input>
      <sl-input label="Large" size="large" placeholder="Large input"></sl-input>
    </div>
  `,
};

export const InputTypes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <sl-input label="Email" type="email" placeholder="email@example.com"></sl-input>
      <sl-input label="Number" type="number" placeholder="Enter a number"></sl-input>
      <sl-input label="Phone" type="tel" placeholder="+1 (555) 123-4567"></sl-input>
      <sl-input label="URL" type="url" placeholder="https://example.com"></sl-input>
    </div>
  `,
};