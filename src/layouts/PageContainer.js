import React from 'react';
import { css } from '@emotion/react';

const PageContainer = ({
  children,
  className,
  margin = 'default', // 'default', 'wide', 'narrow', 'full', or custom object
  padding = 'default', // 'default', 'wide', 'narrow', 'none', or custom object
  maxWidth = '1200px',
  ...props
}) => {
  // Define margin presets
  const marginPresets = {
    default: { left: '0', right: '0' },
    wide: { left: '0', right: '0' },
    narrow: { left: '0', right: '0' },
    full: { left: '0', right: '0' },
    none: { left: '0', right: '0' },
  };

  // Define padding presets
  const paddingPresets = {
    default: { top: '20px', bottom: '20px', left: '0', right: '0' },
    wide: { top: '40px', bottom: '40px', left: '20px', right: '20px' },
    narrow: { top: '10px', bottom: '10px', left: '0', right: '0' },
    none: { top: '0', bottom: '0', left: '0', right: '0' },
  };

  // Get margin and padding values
  const marginValues = typeof margin === 'object' ? margin : marginPresets[margin] || marginPresets.default;
  const paddingValues = typeof padding === 'object' ? padding : paddingPresets[padding] || paddingPresets.default;

  const marginTop = marginValues.top ?? '0';
  const marginRight = marginValues.right ?? 'auto';
  const marginBottom = marginValues.bottom ?? '0';
  const marginLeft = marginValues.left ?? 'auto';
  const isFullWidth = margin === 'full' || margin === 'none';

  const containerStyle = css`
    margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft};
    padding: ${paddingValues.top || '0'} ${paddingValues.right || '0'} ${paddingValues.bottom || '0'}
      ${paddingValues.left || '0'};
    max-width: ${maxWidth};
    width: auto;
    box-sizing: border-box;

    @media (max-width: 768px) {
      margin-left: ${isFullWidth ? '0' : '5%'};
      margin-right: ${isFullWidth ? '0' : '5%'};
      padding-left: ${paddingValues.left === '0' ? '0' : '10px'};
      padding-right: ${paddingValues.right === '0' ? '0' : '10px'};
    }

    @media (max-width: 480px) {
      margin-left: ${isFullWidth ? '0' : '2%'};
      margin-right: ${isFullWidth ? '0' : '2%'};
      padding-left: ${paddingValues.left === '0' ? '0' : '5px'};
      padding-right: ${paddingValues.right === '0' ? '0' : '5px'};
    }
  `;

  return (
    <div css={containerStyle} className={className} {...props}>
      {children}
    </div>
  );
};

export default PageContainer;
