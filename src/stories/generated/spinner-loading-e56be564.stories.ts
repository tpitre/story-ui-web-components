import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';

const meta: Meta = {
  title: 'Generated/Spinner Loading',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: {
      control: 'text',
      description: 'The size of the spinner',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<sl-spinner></sl-spinner>`,
};

export const Small: Story = {
  render: () => html`<sl-spinner style="font-size: 1rem;"></sl-spinner>`,
};

export const Medium: Story = {
  render: () => html`<sl-spinner style="font-size: 2rem;"></sl-spinner>`,
};

export const Large: Story = {
  render: () => html`<sl-spinner style="font-size: 3rem;"></sl-spinner>`,
};

export const ExtraLarge: Story = {
  render: () => html`<sl-spinner style="font-size: 5rem;"></sl-spinner>`,
};

export const CustomColor: Story = {
  render: () => html`
    <sl-spinner style="font-size: 3rem; --indicator-color: deeppink; --track-color: pink;"></sl-spinner>
  `,
};

export const LoadingCard: Story = {
  render: () => html`
    <sl-card style="width: 300px; text-align: center;">
      <div slot="header">Loading Content</div>
      <div style="padding: 2rem;">
        <sl-spinner style="font-size: 3rem;"></sl-spinner>
        <p style="margin-top: 1rem; color: var(--sl-color-neutral-600);">
          Please wait while we load your data...
        </p>
      </div>
    </sl-card>
  `,
};

export const MultipleSpinners: Story = {
  render: () => html`
    <div style="display: flex; gap: 2rem; align-items: center;">
      <sl-spinner style="font-size: 1rem;"></sl-spinner>
      <sl-spinner style="font-size: 2rem;"></sl-spinner>
      <sl-spinner style="font-size: 3rem;"></sl-spinner>
      <sl-spinner style="font-size: 4rem;"></sl-spinner>
    </div>
  `,
};