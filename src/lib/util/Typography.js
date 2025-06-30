import { css } from '@emotion/react';
import { Typography } from '../style';

/**
 * Typography utility functions for easy styling
 */

// Create CSS for typography styles
export const typography = (styleName) => {
  const style = Typography.styles[styleName];
  if (!style) {
    console.warn(`Typography style "${styleName}" not found`);
    return css``;
  }
  return css(style);
};

// Create CSS for font family
export const fontFamily = (family = 'primary') => css`
  font-family: ${Typography.fontFamily[family]};
`;

// Create CSS for font size
export const fontSize = (size) => css`
  font-size: ${Typography.fontSize[size]};
`;

// Create CSS for font weight
export const fontWeight = (weight) => css`
  font-weight: ${Typography.fontWeight[weight]};
`;

// Create CSS for line height
export const lineHeight = (height) => css`
  line-height: ${Typography.lineHeight[height]};
`;

// Create CSS for letter spacing
export const letterSpacing = (spacing) => css`
  letter-spacing: ${Typography.letterSpacing[spacing]};
`;

// Create CSS for text effects
export const textEffect = (effect) => {
  const effectStyle = Typography.effects[effect];
  if (!effectStyle) {
    console.warn(`Text effect "${effect}" not found`);
    return css``;
  }
  return css(effectStyle);
};

// Create CSS for text shadow
export const textShadow = (shadow) => css`
  text-shadow: ${Typography.textShadow[shadow]};
`;

// Responsive typography helper
export const responsiveText = (breakpoint, styleName) => {
  const style = Typography.responsive[breakpoint]?.[styleName];
  if (!style) {
    console.warn(`Responsive typography "${breakpoint}.${styleName}" not found`);
    return css``;
  }
  return css(style);
};

// Create CSS for layout styles
export const layout = (layoutName) => {
  const layoutStyle = Typography.layouts[layoutName];
  if (!layoutStyle) {
    console.warn(`Layout "${layoutName}" not found`);
    return css``;
  }
  return css(layoutStyle);
};

// Create CSS for component styles
export const component = (componentName) => {
  const componentStyle = Typography.components[componentName];
  if (!componentStyle) {
    console.warn(`Component style "${componentName}" not found`);
    return css``;
  }
  return css(componentStyle);
};

// Combine multiple typography utilities
export const text = (...styles) => css(styles); 