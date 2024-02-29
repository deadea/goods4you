import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
      limit: 9,
      products: {
        products: [],
        total: 0,
        skip: 0,
        limit: 0,
      },
      filteredProducts: {
        products: [],
        total: 0,
        skip: 0,
        limit: 0,
      },
      oneProduct: {
        id: 0,
        title: "",
        description: "",
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: "",
        category: "",
        thumbnail: "",
        images: []
      }
    },
    reducers: {
        getProducts: (state, action) => {
        state.products = action.payload
      },
        getNextProducts: (state, action) => {
        state.limit += action.payload
      },
        resetProductsLimit: (state) => {
        state.limit = 9
      },
        getFilteredProducts: (state, action) => {
        state.filteredProducts = action.payload
      },
        getOneProduct: (state, action) => {
        state.oneProduct = action.payload
      },
    },
  })
  
  export const { getProducts, getNextProducts, getFilteredProducts, resetProductsLimit, getOneProduct } = productsSlice.actions
  
  export default productsSlice.reducer