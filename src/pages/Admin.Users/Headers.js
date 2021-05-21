import { Button, InputGroup } from "@blueprintjs/core";
import { Container, Navbar } from "components";

const Headers = () => {
  return (
    <Navbar>
      <Navbar.Group>
        <Navbar.Heading>Users</Navbar.Heading>
        <Navbar.Divider />
        <Button text="Coba" />
      </Navbar.Group>
      <Navbar.Group align="right">
        <InputGroup />
        <Navbar.Divider />
        <Button text="Coba" />
      </Navbar.Group>
    </Navbar>
  )
}

export default Headers;