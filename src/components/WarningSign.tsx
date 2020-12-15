import { Icon } from "@chakra-ui/react";
import { RiErrorWarningLine } from "react-icons/ri";

export const WarningSign = ({ requirement }: { requirement: any }) => {
  return (
    !requirement && (
      <Icon as={RiErrorWarningLine} boxSize={8} color="orange.300" />
    )
  );
};
