import type { Preview } from '@storybook/web-components-vite';

// Import Shoelace styles and components
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';

// Set the base path FIRST - this must happen before any Shoelace components are used
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.1/cdn/');

// Register the default icon library explicitly to ensure icons load
// This resolves issues where icons don't appear due to timing/singleton issues
registerIconLibrary('default', {
  resolver: (name) => `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.1/cdn/assets/icons/${name}.svg`,
});

// Apply Shoelace's font and base styles to the body for slotted content
// Shoelace uses Shadow DOM, so slotted content (light DOM) needs global styles
const globalStyles = document.createElement('style');
globalStyles.textContent = `
  body {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    color: var(--sl-color-neutral-900);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
document.head.appendChild(globalStyles);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
