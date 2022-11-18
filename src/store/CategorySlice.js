import { APIService } from 'utils/service';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCategoryAsync = createAsyncThunk(
  'products/getCategory',
  async () => {
    const response = await APIService.get('categories');
    return response.data;
  }
);

const initialState = {
  data: [],
  loading: {
    list: false
  }
};

export const categoryStore = createSlice({
  name: 'categorySlice',
  initialState: {
    ...initialState
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryAsync.pending, (state, action) => {
      state.loading.list = true;
    });
    builder.addCase(getCategoryAsync.fulfilled, (state, action) => {
      state.loading.list = false;
      state.data = action.payload;
    });
    builder.addCase(getCategoryAsync.rejected, (state, action) => {
      state.loading.list = false;
    });
  }
});

export default categoryStore.reducer;
