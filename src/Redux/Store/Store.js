import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../Reducer/productSlice'
import cartReducer from '../Reducer/cartSlice'
import ReduxThunk from "redux-thunk";

export const middlewares = [ReduxThunk];

export const store = configureStore({
    reducer: {
        abc: productReducer,
        bcd:cartReducer,
      },
      middleware: middlewares,
})
