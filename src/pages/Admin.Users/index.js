import { Box, Flex } from "components";
import Headers from "./Headers";
import List from "./List";

const Users = () => {
  return (
    <Flex sx={{
      flexDirection: "column",
      position: "relative",
      width: "100%",
      height: "100%",
    }}>
      <Box>
        <Headers />
      </Box>
      <Box sx={{
        overflowX: "hidden",
        overflowY: "auto"
      }}>
        <List />
      </Box>
    </Flex>
  )
}

export default Users;