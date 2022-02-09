import { Box, Container, Flex, Image, Spacer } from "@chakra-ui/react";
import logo from "../../logo.svg";
import AppDrawer from "./AppDrawer/AppDrawer";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <Box shadow='base' position='fixed' w='full'>
        <Container maxW='container.lg'>
          <Flex h='60px' width='full' alignItems='center'>
            <Image src={logo} h='45' />
            <Spacer />
            <Nav />
            <AppDrawer />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Header;
