// @ts-nocheck

import { useState } from "react";
import { useStoreActions } from "easy-peasy";
import {
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import { HiUserCircle } from "react-icons/hi";

export const Login = () => {
  const [passcode, setPasscode] = useState("");
  const verifyUser = useStoreActions((actions) => actions.verifyUser);
  const handleChange = (event) => {
    setPasscode({ value: event.target.value });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    verifyUser(passcode.value);
  };

  return (
    <Center marginTop="20%">
      <form onSubmit={onSubmit}>
        <InputGroup maxWidth={400}>
          <InputLeftElement
            h="100%"
            pointerEvents="none"
            children={
              <Icon as={HiUserCircle} w={7} h="100%" color="gray.300" />
            }
          />
          <Input
            placeholder="Enter passcode"
            size="lg"
            onChange={handleChange}
          />
        </InputGroup>
      </form>
    </Center>
  );
};
