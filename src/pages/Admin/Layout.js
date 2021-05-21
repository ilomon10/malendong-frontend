import { Box, Flex } from "components";
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
      <Box
        sx={{
          position: "relative",
          zIndex: 5,
          width: 41
        }}
      >
        <Sidenav />
      </Box>
      <Flex sx={{
        position: "relative",
        bg: "gray.1",
        flexGrow: 1,
        zIndex: 1
      }}>
        <Router />
      </Flex>
    </Flex>
  )
}

export default Layout;