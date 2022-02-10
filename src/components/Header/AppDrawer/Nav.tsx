import { Box, VStack } from "@chakra-ui/react";
import NavLink from "../NavLink";

const Nav = () => {
  return (
    <>
      <Box as='nav' mt='20'>
        <VStack spacing={12} alignItems='normal' fontWeight='semibold'>
          <NavLink to='/'>Hello World</NavLink>
          <NavLink to='/counter'>Counter</NavLink>
          <NavLink to='/sum-calculator'>Sum Calculator</NavLink>
          <NavLink to='/stop-button'>Stop Button</NavLink>
          <NavLink to='/todo'>Todo</NavLink>
        </VStack>
      </Box>
    </>
  );
};

export default Nav;
