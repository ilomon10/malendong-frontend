import { Flex } from "components";
import Router from "./Router";
import Sidenav from "./Sidenav";

const Layout = () => {
  return (
    <Flex sx={{
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }}>
      <Flex sx={{
        width: 42,
        overflow: "hidden"
      }}>
        <Sidenav />
      </Flex>
      <Flex sx={{ flexGrow: 1 }}>
        <Router />
      </Flex>
    </Flex>
  )
}

export default Layout;