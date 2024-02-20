import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
      categories: [''],
      activeCategory: 'none',
    },
    reducers: {
        getCategories: (state, action) => {
        state.categories = action.payload
      },
        chooseCategory: (state, action) => {
        state.activeCategory = action.payload
      },
        resetCategory: (state) => {
        state.activeCategory = 'none'
      },
    },
  })
  
  export const { getCategories, chooseCategory, resetCategory } = categoriesSlice.actions
  
  export default categoriesSlice.reducer