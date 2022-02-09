import { Box, Button, Center, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import NavSpace from "../components/NavSpace";

const SumCalculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const reset = () => {
    setNum1(0);
    setNum2(0);
  };
  return (
    <>
      <NavSpace />
      <Center flexDirection='column'>
        <Box mt='20'>
          <HStack alignItems='normal'>
            <VStack justifyContent='end'>
              <Text fontWeight='bold' fontSize='x-large' px='4'>
                +
              </Text>
            </VStack>
            <VStack>
              <Input
                type='number'
                textAlign='right'
                value={num1}
                onChange={e => setNum1(parseInt(e.target.value))}
              />
              <Input
                type='number'
                textAlign='right'
                value={num2}
                onChange={e => setNum2(parseInt(e.target.value))}
              />
            </VStack>
          </HStack>
          <Box my='4' w='full' borderTop='1px solid black' />
          <Text textAlign='end' px='4' fontWeight='bold'>
            {num1 + num2}
          </Text>
          <Button mt='4' onClick={reset}>
            RESET
          </Button>
        </Box>
      </Center>
    </>
  );
};

export default SumCalculator;
