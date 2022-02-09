import { Box, Button, Center, Text } from "@chakra-ui/react";
import { useState } from "react";
import randomColor from "randomcolor";

const StopButton = () => {
  const [size, setSize] = useState({
    width: 100,
    height: 50
  });

  const [color, setColor] = useState(randomColor());

  const doubleSize = () => {
    setSize(prevState => ({
      width: prevState.width * 2,
      height: prevState.height * 2
    }));
  };

  const stop = () => {
    setColor(randomColor());
    doubleSize();
  };

  const resetSize = () => {
    setSize(prevState => ({
      width: 100,
      height: 50
    }));
  };

  return (
    <>
      <Center h='100vh'>
        <Button
          _hover={{ bgColor: "none" }}
          transform='auto'
          bgColor={color}
          letterSpacing='wider'
          h={size.height}
          w={size.width}
          color='white'
          onClick={stop}
          onDoubleClick={resetSize}
        >
          <Box alignItems='normal' w='full'>
            <Text fontWeight='extrabold'>STOP</Text>
            <Text fontSize='.5rem' whiteSpace='normal'>
              Double click to reset
            </Text>
          </Box>
        </Button>
      </Center>
    </>
  );
};

export default StopButton;
