import { Box, HStack } from "@chakra-ui/react";
import NavLink from "./NavLink";

const Nav = () => {
  return (
    <>
      <Box as='nav' display={{ base: "none", md: "block" }}>
        <HStack spacing={12} fontWeight='semibold'>
          <NavLink to='/'>Hello World</NavLink>
          <NavLink to='/counter'>Counter</NavLink>
          <NavLink to='/sum-calculator'>Sum Calculator</NavLink>
          <NavLink to='/stop-button'>Stop Button</NavLink>
          <NavLink to='/todo'>Todo</NavLink>
        </HStack>
      </Box>
    </>
  );
};

export default Nav;
