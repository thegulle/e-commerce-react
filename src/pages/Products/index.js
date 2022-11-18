import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import OverlayLoader from "components/OverlayLoader";
function Products() {
  const productsLoading = useSelector((state) => state.productSlice.filter_options);
  return (
    <>
      <OverlayLoader open={productsLoading.list} />
      <Outlet />
    </>
  );
}

export default Products;