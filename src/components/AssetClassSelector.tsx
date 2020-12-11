import { MouseEventHandler } from "react";
import { ButtonGroup } from "@chakra-ui/react";
import { ButtonGroupMember } from "./ButtonGroupMember";
import { ETF, STOCKS } from "../constants";

export const AssetClassSelector = ({
  event,
}: {
  event: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <ButtonGroup variant="outline" spacing="0">
      <ButtonGroupMember event={event} label={STOCKS} left />
      <ButtonGroupMember event={event} label={ETF} right />
    </ButtonGroup>
  );
};
