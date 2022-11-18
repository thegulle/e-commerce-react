import { useEffect } from 'react';
import { Paper, Grid, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material'
import { useSelector, useDispatch } from "react-redux";
import { setFilterOptions } from "store/ProductSlice";
import { getCategoryAsync } from "store/CategorySlice";

export default function TopFilter() {
  const dispatch = useDispatch();
  const filterOptions = useSelector((state) => state.productSlice.filter_options);
  const categories = useSelector((state) => state.categorySlice.data);

  useEffect(() => {
    dispatch(getCategoryAsync())
  }, [dispatch])
  return (
    <>
      <Paper sx={
        {
          p: 2,
          justifyContent: 'space-between',
          height: '300px',
        }
      }>
        <FormControl className='side-filter__container' fullWidth>
          <Grid container spacing={2} direction="column" alignItems="flex-start">
            <Grid item xs={12}>
              <FormLabel>Category</FormLabel>
              <RadioGroup
                value={parseInt(filterOptions.category_id)}
                onChange={(e) => dispatch(setFilterOptions({ ...filterOptions, category_id: e.target.value }))}
              >
                {categories.map((category) => (
                  <FormControlLabel
                    key={category.id}
                    value={category.id}
                    control={<Radio />}
                    label={category.name}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </>
  )
}
