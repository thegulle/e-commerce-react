import { APIService } from 'utils/service';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsAsync = createAsyncThunk(
  'products/getProducts',
  async (_, _thunkAPI) => {
    let filterOptions = _thunkAPI.getState().productSlice.filter_options
    const response = await APIService.get('products', filterOptions);
    return response.data;
  }
);

export const getBestSellersAsync = createAsyncThunk(
  'products/getBestSellers',
  async () => {
    const response = await APIService.get('best-sellers');
    return response.data;
  }
);

export const initialState = {
  data: [],
  best_sellers: [],
  filter_options: {
    _sort: 'id'
  },
  loading: {
    list: false,
    best_sellers: false
  }
};

export const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
    ...initialState
  },
  reducers: {
    setFilterOptions: (state, action) => {
      state.filter_options = action.payload;
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsAsync.pending, (state, action) => {
      state.loading.list = true;
    });
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      state.loading.list = false;
      state.data = action.payload;
    });
    builder.addCase(getProductsAsync.rejected, (state, action) => {
      state.loading.list = false;
    });
    builder.addCase(getBestSellersAsync.pending, (state, action) => {
      state.loading.best_sellers = true;
    });
    builder.addCase(getBestSellersAsync.fulfilled, (state, action) => {
      state.loading.best_sellers = false;
      state.best_sellers = action.payload;
    });
    builder.addCase(getBestSellersAsync.rejected, (state, action) => {
      state.loading.best_sellers = false;
    });
  }
});

export const { setFilterOptions, reset } = productSlice.actions;
export default productSlice.reducer;
