import { IconButton } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";

export const AddButton = ({ onClick }: any) => {
  return (
    <IconButton
      variant="outline"
      colorScheme="teal"
      aria-label="Open"
      fontSize="22px"
      icon={<IoMdAdd />}
      onClick={onClick}
    />
  );
};
