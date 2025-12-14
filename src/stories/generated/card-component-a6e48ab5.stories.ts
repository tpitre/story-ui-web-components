import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

const meta: Meta = {
  title: 'Generated/Card Component',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <sl-card style="max-width: 300px;">
      <div slot="header">
        Card Title
      </div>
      <p>
        This is a basic card component with header and footer slots.
        Cards are useful for grouping related content.
      </p>
      <sl-button slot="footer" variant="primary">
        Action
      </sl-button>
    </sl-card>
  `,
};

export const WithImage: Story = {
  render: () => html`
    <sl-card style="max-width: 300px;">
      <img
        slot="image"
        src="https://picsum.photos/400/300?random=1"
        alt="Placeholder"
        style="width: 100%; height: auto;"
      />
      <div slot="header">
        Beautiful Landscape
      </div>
      <p>
        A stunning view captured at the perfect moment.
        This card includes an image in the dedicated image slot.
      </p>
      <sl-button slot="footer" variant="primary" outline>
        View Details
      </sl-button>
    </sl-card>
  `,
};

export const ProductCard: Story = {
  render: () => html`
    <sl-card style="max-width: 320px;">
      <img
        slot="image"
        src="https://picsum.photos/400/300?random=2"
        alt="Product"
        style="width: 100%; height: auto;"
      />
      <div slot="header" style="display: flex; justify-content: space-between; align-items: center;">
        <strong>Premium Product</strong>
        <sl-badge variant="success">New</sl-badge>
      </div>
      <p style="margin: 0 0 8px 0;">
        High-quality product with excellent features and outstanding performance.
      </p>
      <div style="font-size: 24px; font-weight: bold; color: var(--sl-color-primary-600);">
        $99.99
      </div>
      <sl-divider style="margin: 16px 0;"></sl-divider>
      <div slot="footer" style="display: flex; gap: 8px;">
        <sl-button variant="primary" style="flex: 1;">
          <sl-icon slot="prefix" name="cart"></sl-icon>
          Add to Cart
        </sl-button>
        <sl-button variant="default">
          <sl-icon name="heart"></sl-icon>
        </sl-button>
      </div>
    </sl-card>
  `,
};

export const ProfileCard: Story = {
  render: () => html`
    <sl-card style="max-width: 350px; text-align: center;">
      <div style="padding: 16px;">
        <img
          src="https://picsum.photos/200/200?random=3"
          alt="Profile"
          style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin: 0 auto;"
        />
        <h3 style="margin: 16px 0 8px 0;">Jane Doe</h3>
        <p style="color: var(--sl-color-neutral-600); margin: 0 0 16px 0;">
          Senior Product Designer
        </p>
        <p style="margin: 0 0 16px 0;">
          Passionate about creating beautiful and functional user experiences.
        </p>
        <div style="display: flex; gap: 8px; justify-content: center;">
          <sl-button size="small">
            <sl-icon slot="prefix" name="envelope"></sl-icon>
            Email
          </sl-button>
          <sl-button size="small" variant="default">
            <sl-icon slot="prefix" name="linkedin"></sl-icon>
            Connect
          </sl-button>
        </div>
      </div>
    </sl-card>
  `,
};

export const SimpleCard: Story = {
  render: () => html`
    <sl-card style="max-width: 280px;">
      <p style="margin: 0;">
        A simple card without header or footer. Perfect for displaying
        standalone content or information blocks.
      </p>
    </sl-card>
  `,
};