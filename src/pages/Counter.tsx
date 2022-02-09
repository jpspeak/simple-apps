import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Button, Center, Heading, HStack, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import NavSpace from "../components/NavSpace";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevState => prevState + 1);
  };

  const decrement = () => {
    setCount(prevState => prevState - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <NavSpace />
      <Center w='full' mt='20' flexDirection='column'>
        <HStack spacing={20}>
          <IconButton aria-label='decrement' icon={<MinusIcon />} onClick={decrement} />
          <Heading size='4xl'>{count}</Heading>
          <IconButton aria-label='increment' icon={<AddIcon />} onClick={increment} />
        </HStack>
        <Text mt='4' color={count % 2 === 0 ? "green" : "red"}>
          {count % 2 === 0 ? "Even" : "Odd"}
        </Text>
        <Button mt='8' onClick={reset}>
          RESET
        </Button>
      </Center>
    </>
  );
};

export default Counter;
