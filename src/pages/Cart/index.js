import { Outlet } from "react-router-dom"
import Banner from "components/Banner"

export default function Cart() {
  return (
    <>
      <Banner
        title="Carry one thing. Everything."
        src="https://www.macworld.com/wp-content/uploads/2021/11/wallet-icon-macos-preference-1.png?w=1024"
        srcWidth={250} />
      <Outlet />
    </>
  )
}
