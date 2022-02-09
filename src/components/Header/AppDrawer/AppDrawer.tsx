import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useDisclosure
} from "@chakra-ui/react";
import Nav from "./Nav";

const AppDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box display={{ base: "block", md: "none" }}>
      <IconButton aria-label='drawer' icon={<HamburgerIcon />} onClick={onOpen} />
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Nav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default AppDrawer;
