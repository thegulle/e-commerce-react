import { sortBy } from 'lodash';

export const filterData = (data, filter) => {
  const { sort, price } = filter;
  let filteredData = data;

  if (sort === 'price') {
    filteredData = sortBy(filteredData, ['price']);
  } else if (sort === 'name') {
    filteredData = sortBy(filteredData, ['name']);
  }

  if (price.min > 0) {
    filteredData = filteredData.filter((item) => item.price >= price.min);
  }

  if (price.max > 0) {
    filteredData = filteredData.filter((item) => item.price <= price.max);
  }

  return filteredData;
}