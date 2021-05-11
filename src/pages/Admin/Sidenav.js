import { Button } from "@blueprintjs/core";
import { Box } from "components";
import { useNav } from "./hoc";

const Sidenav = () => {
  const navigation = useNav();
  console.log(navigation.current);
  return (
    <Box>
      {navigation.items.map((item) => (
        <Button
          key={item.path}
          active={item.path === navigation.current.path}
          minimal={true}
          large={true}
          icon={item.icon || "blank"}
          text={item.text}
          onClick={() => navigation.go(`/admin${item.path}`)}
        />
      ))}
    </Box>
  )
}

export default Sidenav;