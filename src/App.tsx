import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import Harness from './templates/Harness';
import Main from './pages/Main';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Harness>
        <Main />
      </Harness>
    </ThemeProvider>
  );
}

export default App;