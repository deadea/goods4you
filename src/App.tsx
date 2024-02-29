import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from './store/slices/categoriesSlice';
import { getProducts, getFilteredProducts } from './store/slices/productsSlice';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { RootState } from './store/store';

import Service from './service/Service';
import Harness from './templates/Harness';
import Main from './pages/Main';
import Admin from './pages/Admin';
import NoExist from './pages/NoExist';
import Product from './pages/Product';

const App = () => {
  const limit = useSelector((state: RootState) => state.products.limit)
  const activeCategory = useSelector((state: RootState) => state.categories.activeCategory)
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

  useEffect(() => {
    Service.getCategoryProducts(activeCategory, limit)
      .then((result) => {
        if (result.error) {
          console.log('error')
        } else {
          dispatch(getFilteredProducts(result))
        }
      })
      .catch(() => {
        console.log('error2')
      })
}, [activeCategory])

  useEffect(() => {
    Service.getAllProducts(limit)
    .then((result) => {
      if (result.error) {
        console.log('error')
      } else {
        dispatch(getProducts(result))
      }
    })
    .catch(() => {
      console.log('error')
    })
  }, [limit])

  return (
    <ThemeProvider theme={theme}>
        <Harness>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/product" element={<Product />} />
              <Route path="*" element={<NoExist />} />
          </Routes>
        </Harness>
    </ThemeProvider>
  );
}

export default App;