/* eslint-disable no-console */

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

// Create CSS for text effects
export const textEffect = (effect) => {
  const effectStyle = Typography.effects[effect];
  if (!effectStyle) {
    console.warn(`Text effect "${effect}" not found`);
    return css``;
  }
  return css(effectStyle);
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
