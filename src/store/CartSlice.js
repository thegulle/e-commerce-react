import { APIService } from 'utils/service';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCartAsync = createAsyncThunk('cartSlice/getCartAsync', async () => {
  const response = await APIService.get('cart')
  return response.data
})

export const storeCartAsync = createAsyncThunk('cartSlice/storeCartAsync', async (product, _thunkAPI) => {
  let stateCart = _thunkAPI.getState().cartSlice.cart.find(item => item.product_id === product.id)
  if (stateCart?.id) {
    let data = { ...stateCart, quantity: stateCart.quantity + 1 }
    await APIService.put(`cart/${stateCart.id}`, data)
  } else {
    let data = { ...product, product_id: product.id, id: Date.now(), quantity: 1 }
    await APIService.post('cart', data)
  }
  _thunkAPI.dispatch(getCartAsync())
})

export const deleteCartAsync = createAsyncThunk('cartSlice/deleteCartAsync', async (id, _thunkAPI) => {
  await APIService.delete(`cart/${id}`)
  _thunkAPI.dispatch(getCartAsync())
})

export const deleteAllCartAsync = createAsyncThunk('cartSlice/deleteAllCartAsync', async (_, _thunkAPI) => {
  let ids = await _thunkAPI.getState().cartSlice.cart.map(item => item.id)
  /* do not use like this,i have to made like this because of json-server */
  for (let i = 0; i < ids.length; i++) {
    await APIService.delete(`cart/${ids[i]}`)
  }
  _thunkAPI.dispatch(getCartAsync())
})

const initialState = {
  cart: [],
  loading: {
    list: false,
    action: false
  },
}

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    ...initialState
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartAsync.pending, (state, action) => {
      state.loading.list = true;
    });
    builder.addCase(getCartAsync.fulfilled, (state, action) => {
      state.loading.list = false;
      state.cart = action.payload;
    });
    builder.addCase(storeCartAsync.pending, (state, action) => {
      state.loading.action = true;
    });
    builder.addCase(storeCartAsync.fulfilled, (state, action) => {
      state.loading.action = false;
    });
    builder.addCase(deleteAllCartAsync.pending, (state, action) => {
      state.loading.action = true;
    });
    builder.addCase(deleteAllCartAsync.fulfilled, (state, action) => {
      state.loading.action = false;
    });
  }
});

export default cartSlice.reducer;