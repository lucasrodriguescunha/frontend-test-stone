'use client';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '../styles/GlobalStyles';

export default function StyledComponentsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
