import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

const meta: Meta = {
  title: 'Generated/Tab Group',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <sl-tab-group>
      <sl-tab slot="nav" panel="general">General</sl-tab>
      <sl-tab slot="nav" panel="custom">Custom</sl-tab>
      <sl-tab slot="nav" panel="advanced">Advanced</sl-tab>
      <sl-tab slot="nav" panel="disabled" disabled>Disabled</sl-tab>

      <sl-tab-panel name="general">
        <p>This is the general tab panel. You can put any content here.</p>
      </sl-tab-panel>
      <sl-tab-panel name="custom">
        <p>This is the custom tab panel with customized settings and options.</p>
      </sl-tab-panel>
      <sl-tab-panel name="advanced">
        <p>This is the advanced tab panel for power users.</p>
      </sl-tab-panel>
      <sl-tab-panel name="disabled">
        <p>This panel is disabled and cannot be accessed.</p>
      </sl-tab-panel>
    </sl-tab-group>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <sl-tab-group>
      <sl-tab slot="nav" panel="home">
        <sl-icon name="house"></sl-icon>
        Home
      </sl-tab>
      <sl-tab slot="nav" panel="profile">
        <sl-icon name="person"></sl-icon>
        Profile
      </sl-tab>
      <sl-tab slot="nav" panel="settings">
        <sl-icon name="gear"></sl-icon>
        Settings
      </sl-tab>
      <sl-tab slot="nav" panel="notifications">
        <sl-icon name="bell"></sl-icon>
        Notifications
      </sl-tab>

      <sl-tab-panel name="home">
        <h3>Welcome Home</h3>
        <p>Your dashboard and recent activity will appear here.</p>
      </sl-tab-panel>
      <sl-tab-panel name="profile">
        <h3>Your Profile</h3>
        <p>Manage your personal information and preferences.</p>
      </sl-tab-panel>
      <sl-tab-panel name="settings">
        <h3>Settings</h3>
        <p>Configure your account settings and options.</p>
      </sl-tab-panel>
      <sl-tab-panel name="notifications">
        <h3>Notifications</h3>
        <p>View and manage your notifications.</p>
      </sl-tab-panel>
    </sl-tab-group>
  `,
};

export const BottomPlacement: Story = {
  render: () => html`
    <sl-tab-group placement="bottom">
      <sl-tab slot="nav" panel="overview">Overview</sl-tab>
      <sl-tab slot="nav" panel="details">Details</sl-tab>
      <sl-tab slot="nav" panel="reviews">Reviews</sl-tab>

      <sl-tab-panel name="overview">
        <p>Product overview and key features are displayed here.</p>
      </sl-tab-panel>
      <sl-tab-panel name="details">
        <p>Detailed specifications and technical information.</p>
      </sl-tab-panel>
      <sl-tab-panel name="reviews">
        <p>Customer reviews and ratings.</p>
      </sl-tab-panel>
    </sl-tab-group>
  `,
};

export const StartPlacement: Story = {
  render: () => html`
    <sl-tab-group placement="start" style="height: 300px;">
      <sl-tab slot="nav" panel="dashboard">Dashboard</sl-tab>
      <sl-tab slot="nav" panel="analytics">Analytics</sl-tab>
      <sl-tab slot="nav" panel="reports">Reports</sl-tab>
      <sl-tab slot="nav" panel="export">Export</sl-tab>

      <sl-tab-panel name="dashboard">
        <p>Main dashboard with key metrics and charts.</p>
      </sl-tab-panel>
      <sl-tab-panel name="analytics">
        <p>Detailed analytics and insights.</p>
      </sl-tab-panel>
      <sl-tab-panel name="reports">
        <p>Generate and view reports.</p>
      </sl-tab-panel>
      <sl-tab-panel name="export">
        <p>Export data in various formats.</p>
      </sl-tab-panel>
    </sl-tab-group>
  `,
};

export const Scrollable: Story = {
  render: () => html`
    <sl-tab-group>
      <sl-tab slot="nav" panel="tab1">Tab 1</sl-tab>
      <sl-tab slot="nav" panel="tab2">Tab 2</sl-tab>
      <sl-tab slot="nav" panel="tab3">Tab 3</sl-tab>
      <sl-tab slot="nav" panel="tab4">Tab 4</sl-tab>
      <sl-tab slot="nav" panel="tab5">Tab 5</sl-tab>
      <sl-tab slot="nav" panel="tab6">Tab 6</sl-tab>
      <sl-tab slot="nav" panel="tab7">Tab 7</sl-tab>
      <sl-tab slot="nav" panel="tab8">Tab 8</sl-tab>
      <sl-tab slot="nav" panel="tab9">Tab 9</sl-tab>
      <sl-tab slot="nav" panel="tab10">Tab 10</sl-tab>

      <sl-tab-panel name="tab1"><p>Content for Tab 1</p></sl-tab-panel>
      <sl-tab-panel name="tab2"><p>Content for Tab 2</p></sl-tab-panel>
      <sl-tab-panel name="tab3"><p>Content for Tab 3</p></sl-tab-panel>
      <sl-tab-panel name="tab4"><p>Content for Tab 4</p></sl-tab-panel>
      <sl-tab-panel name="tab5"><p>Content for Tab 5</p></sl-tab-panel>
      <sl-tab-panel name="tab6"><p>Content for Tab 6</p></sl-tab-panel>
      <sl-tab-panel name="tab7"><p>Content for Tab 7</p></sl-tab-panel>
      <sl-tab-panel name="tab8"><p>Content for Tab 8</p></sl-tab-panel>
      <sl-tab-panel name="tab9"><p>Content for Tab 9</p></sl-tab-panel>
      <sl-tab-panel name="tab10"><p>Content for Tab 10</p></sl-tab-panel>
    </sl-tab-group>
  `,
};