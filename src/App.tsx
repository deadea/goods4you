import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategories } from './store/slices/categoriesSlice';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import Service from './service/Service';
import Harness from './templates/Harness';
import Main from './pages/Main';
import Admin from './pages/Admin';
import NoExist from './pages/NoExist';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    Service.getCategories()
      .then((result) => {
        if (result.error) {
          console.log('error')
        } else {
          dispatch(getCategories(result))
        }
      })
      .catch(() => {
        console.log('error2')
      })
}, [])

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