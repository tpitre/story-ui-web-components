import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

const meta: Meta = {
  title: 'Generated/Alert Notification',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'neutral', 'warning', 'danger'],
    },
    closable: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
    closable: true,
  },
  render: (args) => html`
    <sl-alert variant=${args.variant} ?open=${true} ?closable=${args.closable}>
      <sl-icon slot="icon" name="info-circle"></sl-icon>
      <strong>Information</strong><br />
      This is a primary notification alert with important information.
    </sl-alert>
  `,
};

export const Success: Story = {
  render: () => html`
    <sl-alert variant="success" ?open=${true} ?closable=${true}>
      <sl-icon slot="icon" name="check2-circle"></sl-icon>
      <strong>Success!</strong><br />
      Your changes have been saved successfully.
    </sl-alert>
  `,
};

export const Warning: Story = {
  render: () => html`
    <sl-alert variant="warning" ?open=${true} ?closable=${true}>
      <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
      <strong>Warning</strong><br />
      Please review your input before proceeding.
    </sl-alert>
  `,
};

export const Danger: Story = {
  render: () => html`
    <sl-alert variant="danger" ?open=${true} ?closable=${true}>
      <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
      <strong>Error</strong><br />
      An error occurred while processing your request.
    </sl-alert>
  `,
};

export const Neutral: Story = {
  render: () => html`
    <sl-alert variant="neutral" ?open=${true} ?closable=${true}>
      <sl-icon slot="icon" name="gear"></sl-icon>
      <strong>System Update</strong><br />
      A system update is available. Click to learn more.
    </sl-alert>
  `,
};

export const NotClosable: Story = {
  render: () => html`
    <sl-alert variant="primary" ?open=${true} ?closable=${false}>
      <sl-icon slot="icon" name="info-circle"></sl-icon>
      <strong>Permanent Notice</strong><br />
      This notification cannot be dismissed.
    </sl-alert>
  `,
};

export const MultipleAlerts: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <sl-alert variant="success" ?open=${true} ?closable=${true}>
        <sl-icon slot="icon" name="check2-circle"></sl-icon>
        <strong>Payment Successful</strong><br />
        Your payment has been processed.
      </sl-alert>
      
      <sl-alert variant="warning" ?open=${true} ?closable=${true}>
        <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
        <strong>Action Required</strong><br />
        Please verify your email address within 24 hours.
      </sl-alert>
      
      <sl-alert variant="danger" ?open=${true} ?closable=${true}>
        <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
        <strong>Account Suspended</strong><br />
        Your account has been temporarily suspended due to unusual activity.
      </sl-alert>
    </div>
  `,
};