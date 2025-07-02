import React, { useMemo } from 'react';
import { Global, css } from '@emotion/react';
import AppRouter from './routes';
import AppLayout from './layouts/AppLayout';
import { useThemeContext } from './contexts/ThemeContext';
import { baseStyles, makeCssVars } from './lib/style';

function App() {
  const { colors } = useThemeContext();
  const variables = useMemo(() => makeCssVars(colors), [colors]);

  return (
    <>
      <Global styles={baseStyles} />
      <Global
        styles={css`
          :root {
            ${variables}
          }
        `}
      />

      <AppLayout>
        <AppRouter />
      </AppLayout>
    </>
  );
}

export default App;
