import { Button, Classes, Icon, Text } from "@blueprintjs/core";
import { useTheme } from "@emotion/react";
import { Box, Flex } from "components";
import { useCallback, useRef, useState } from "react";
import { useNav } from "./hoc";

const NavButton = ({ icon, text, ...props }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        [`.${Classes.BUTTON}`]: {
          px: 2,
          display: "flex",
          justifyContent: "start",
          borderRadius: 0,
        }
      }}
    >
      <Button
        minimal={true}
        large={true}
        fill={true}
        icon={
          <Box
            sx={{
              width: 40 - theme.spacing[3],
              textAlign: "center",
              [`.${Classes.ICON}`]: {
                mr: 0
              }
            }}>
            <Icon icon={icon} />
          </Box>}
        text={
          <Text ellipsize={true}>
            {text}
          </Text>
        }
        {...props}
      />
    </Box>
  )
}

const Sidenav = () => {
  const navigation = useNav();
  const [isShow, setIsShow] = useState(true);
  const timeoutRef = useRef();
  const mouseEvent = useCallback((type) => {
    if (type === "enter") {
      if (isShow) return;
      timeoutRef.current = setTimeout(() => {
        setIsShow(true);
      }, 750);
    }
    if (type === "leave") {
      setIsShow(false);
      clearTimeout(timeoutRef.current);
    }
  }, [isShow]);
  return (
    <Flex
      sx={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        height: "100%",
        overflow: "hidden",
        minWidth: 40,
        flexDirection: "column",
        width: isShow ? 140 : 42,
        transition: "width 200ms ease",
        borderRight: "1px solid white",
        borderRightColor: "gray.3",
        zIndex: 5,
        bg: "white"
      }}
      onMouseEnter={() => mouseEvent("enter")}
      onMouseLeave={() => mouseEvent("leave")}
    >
      <NavButton
        icon="menu"
        title="Menu"
        text="Malendong"
        onClick={() => setIsShow(isShow => !isShow)}
      />
      <Box className={Classes.DIVIDER} />
      {navigation.items.map((item) => (
        <NavButton
          key={item.path}
          active={navigation.current && item.path === navigation.current.path}
          icon={item.icon || "blank"}
          text={item.text}
          onClick={() => navigation.go(`/admin${item.path}`)}
        />
      ))}
    </Flex>
  )
}

export default Sidenav;