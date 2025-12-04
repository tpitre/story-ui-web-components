/**
 * Shoelace Design System Considerations for Story UI
 *
 * This file provides design system context to the AI for generating
 * accurate Storybook stories using Shoelace Web Components.
 */

export const considerations = `
## Shoelace Design System Guidelines

### Import Conventions
- Import components from '@shoelace-style/shoelace/dist/components/[component]/[component].js'
- Or use the bundled version: '@shoelace-style/shoelace'
- Use the light or dark theme CSS
- Set base path for icons and assets

### Theme System
Shoelace uses CSS custom properties for theming:
- Light theme: light.css
- Dark theme: dark.css
- Custom themes via CSS variables
- Design tokens for colors, spacing, typography

### Component Best Practices

#### Buttons (sl-button)
- Variants: default, primary, success, neutral, warning, danger, text
- Sizes: small, medium, large
- Use outline attribute for outlined style
- Use pill attribute for rounded corners
- Use loading attribute for loading state
- Use disabled attribute for disabled state

#### Cards (sl-card)
- Use header slot for title
- Use footer slot for actions
- Apply custom styling via parts (base, image, header, body, footer)

#### Inputs (sl-input)
- Types: text, email, password, number, date, etc.
- Use label attribute for accessible labels
- Use placeholder attribute for hint text
- Use help-text attribute for additional info
- Use clearable attribute for clear button

#### Select (sl-select)
- Use sl-option for options
- Use multiple attribute for multi-select
- Use clearable attribute for clear button
- Use placeholder attribute for hint text

#### Dialog (sl-dialog)
- Use label attribute for title
- Use open attribute to show/hide
- Listen to sl-request-close event

#### Alerts (sl-alert)
- Variants: primary, success, neutral, warning, danger
- Use closable attribute for close button
- Use open attribute to show/hide

### CSS Custom Properties
Common design tokens:
- --sl-color-primary-600: Primary color
- --sl-color-success-600: Success color
- --sl-color-warning-600: Warning color
- --sl-color-danger-600: Danger color
- --sl-spacing-medium: Medium spacing
- --sl-border-radius-medium: Medium border radius
- --sl-font-size-medium: Medium font size

### Icons
- Use sl-icon component
- Name from Bootstrap Icons or custom icon library
- Set library attribute for different icon sets
- Example: <sl-icon name="gear"></sl-icon>

### Layout
- Use standard CSS/Flexbox/Grid for layout
- No built-in layout components
- Responsive utilities via CSS

### Accessibility
- All components are accessible by default
- Use proper labels on form elements
- Keyboard navigation built-in
- ARIA attributes applied automatically

### Common Patterns
- Toast notifications with sl-alert
- Modals with sl-dialog
- Tooltips with sl-tooltip
- Tabs with sl-tab-group
- Accordions with sl-details
- Progress with sl-progress-bar or sl-spinner
`;

export default considerations;
