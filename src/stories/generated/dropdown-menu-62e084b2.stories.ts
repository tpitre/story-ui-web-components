import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/menu-label/menu-label.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

const meta: Meta = {
  title: 'Generated/Dropdown Menu',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <sl-dropdown>
      <sl-button slot="trigger" caret>Dropdown</sl-button>
      <sl-menu>
        <sl-menu-item>Item 1</sl-menu-item>
        <sl-menu-item>Item 2</sl-menu-item>
        <sl-menu-item>Item 3</sl-menu-item>
      </sl-menu>
    </sl-dropdown>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <sl-dropdown>
      <sl-button slot="trigger" caret variant="primary">Actions</sl-button>
      <sl-menu>
        <sl-menu-item>
          <sl-icon slot="prefix" name="file-earmark"></sl-icon>
          New File
        </sl-menu-item>
        <sl-menu-item>
          <sl-icon slot="prefix" name="folder"></sl-icon>
          New Folder
        </sl-menu-item>
        <sl-menu-item>
          <sl-icon slot="prefix" name="upload"></sl-icon>
          Upload
        </sl-menu-item>
        <sl-divider></sl-divider>
        <sl-menu-item>
          <sl-icon slot="prefix" name="trash"></sl-icon>
          Delete
        </sl-menu-item>
      </sl-menu>
    </sl-dropdown>
  `,
};

export const WithLabels: Story = {
  render: () => html`
    <sl-dropdown>
      <sl-button slot="trigger" caret>Menu</sl-button>
      <sl-menu>
        <sl-menu-label>Navigation</sl-menu-label>
        <sl-menu-item>Home</sl-menu-item>
        <sl-menu-item>About</sl-menu-item>
        <sl-menu-item>Contact</sl-menu-item>
        <sl-divider></sl-divider>
        <sl-menu-label>Account</sl-menu-label>
        <sl-menu-item>Profile</sl-menu-item>
        <sl-menu-item>Settings</sl-menu-item>
        <sl-menu-item>Logout</sl-menu-item>
      </sl-menu>
    </sl-dropdown>
  `,
};

export const UserMenu: Story = {
  render: () => html`
    <sl-dropdown placement="bottom-end">
      <sl-button slot="trigger" caret>
        <sl-icon slot="prefix" name="person-circle"></sl-icon>
        John Doe
      </sl-button>
      <sl-menu>
        <sl-menu-item>
          <sl-icon slot="prefix" name="person"></sl-icon>
          My Profile
        </sl-menu-item>
        <sl-menu-item>
          <sl-icon slot="prefix" name="gear"></sl-icon>
          Settings
        </sl-menu-item>
        <sl-menu-item>
          <sl-icon slot="prefix" name="bell"></sl-icon>
          Notifications
        </sl-menu-item>
        <sl-divider></sl-divider>
        <sl-menu-item>
          <sl-icon slot="prefix" name="question-circle"></sl-icon>
          Help
        </sl-menu-item>
        <sl-divider></sl-divider>
        <sl-menu-item>
          <sl-icon slot="prefix" name="box-arrow-right"></sl-icon>
          Sign Out
        </sl-menu-item>
      </sl-menu>
    </sl-dropdown>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <sl-dropdown>
      <sl-button slot="trigger" caret>Options</sl-button>
      <sl-menu>
        <sl-menu-item>Available Option</sl-menu-item>
        <sl-menu-item disabled>Disabled Option</sl-menu-item>
        <sl-menu-item>Another Available Option</sl-menu-item>
      </sl-menu>
    </sl-dropdown>
  `,
};