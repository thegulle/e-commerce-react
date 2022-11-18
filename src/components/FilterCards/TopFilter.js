import { Paper, Grid, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material'
import { useSelector, useDispatch } from "react-redux";
import { setFilterOptions, initialState } from "store/ProductSlice";
export default function TopFilter() {
  const dispatch = useDispatch();
  const filterOptions = useSelector((state) => state.productSlice.filter_options);
  return (
    <>
      <Paper sx={
        {
          p: 2,
          justifyContent: 'space-between'
        }
      }>
        <FormControl fullWidth>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={9}>
              <InputLabel id="sort-select-label">Sort By</InputLabel>
              <Select
                labelId="sort-select-label"
                value={filterOptions._sort}
                onChange={(e) => dispatch(setFilterOptions({ ...filterOptions, _sort: e.target.value }))}
                variant='outlined'
                label="Sort By"
                size='small'
                sx={{ width: 200 }}
              >
                <MenuItem value='id'>Best Match</MenuItem>
                <MenuItem value='price'>Price</MenuItem>
                <MenuItem value='name'>Name</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={3}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => dispatch(setFilterOptions({ ...initialState.filter_options }))}>Clear Filter</Button>
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </>
  )
}
