export default function priceFormat(price) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}