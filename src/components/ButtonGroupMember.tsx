import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

type ButtonGroupMemberType = {
  label: string;
  right?: boolean;
  left?: boolean;
  event: MouseEventHandler<HTMLButtonElement>;
};

const RADIUS_AMOUNT = "8px";

export const ButtonGroupMember = ({
  label,
  right,
  left,
  event,
}: ButtonGroupMemberType) => {
  return (
    <Button
      colorScheme="blue"
      onClick={event}
      borderRightRadius={right ? RADIUS_AMOUNT : 0}
      borderLeftRadius={left ? RADIUS_AMOUNT : 0}
      lineHeight={0}
    >
      {label}
    </Button>
  );
};
