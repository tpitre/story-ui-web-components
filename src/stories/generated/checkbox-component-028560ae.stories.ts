import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';

const meta: Meta = {
  title: 'Generated/Checkbox Component',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  render: (args) => html`
    <sl-checkbox
      ?checked=${args.checked}
      ?disabled=${args.disabled}
    >
      Checkbox
    </sl-checkbox>
  `,
};

export const Checked: Story = {
  render: () => html`
    <sl-checkbox checked>I agree to the terms and conditions</sl-checkbox>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-checkbox disabled>Disabled unchecked</sl-checkbox>
      <sl-checkbox checked disabled>Disabled checked</sl-checkbox>
    </div>
  `,
};

export const Indeterminate: Story = {
  render: () => html`
    <sl-checkbox indeterminate>Indeterminate state</sl-checkbox>
  `,
};

export const Group: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <strong>Select your preferences:</strong>
      <sl-checkbox>Email notifications</sl-checkbox>
      <sl-checkbox>SMS notifications</sl-checkbox>
      <sl-checkbox checked>Push notifications</sl-checkbox>
      <sl-checkbox>Newsletter subscription</sl-checkbox>
    </div>
  `,
};

export const WithEventHandler: Story = {
  render: () => html`
    <sl-checkbox
      @sl-change=${(e: CustomEvent) => {
        const checkbox = e.target as any;
        console.log('Checkbox changed:', checkbox.checked);
        alert(`Checkbox is now ${checkbox.checked ? 'checked' : 'unchecked'}`);
      }}
    >
      Click me and check the console
    </sl-checkbox>
  `,
};