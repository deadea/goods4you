import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import Harness from './templates/Harness';
import Main from './pages/Main';
import Admin from './pages/Admin';
import NoExist from './pages/NoExist';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Harness>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NoExist />} />
          </Routes>
        </Harness>
    </ThemeProvider>
  );
}

export default App;