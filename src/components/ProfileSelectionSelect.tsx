// @ts-nocheck

import { Select } from "@chakra-ui/react";
import { useStoreState, useStoreActions } from "easy-peasy";

export const ProfileSelectionSelect = () => {
  const user = useStoreState((state) => state.user);
  const selectedProfile = useStoreState((state) => state.selectedProfile);
  const setSelectedProfile = useStoreActions(
    (actions) => actions.setSelectedProfile
  );
  const fetchSelectedProfileProducts = useStoreActions(
    (actions) => actions.fetchSelectedProfileProducts
  );
  const handleSelect = (e) => {
    const name = e.target.value;
    setSelectedProfile(name);
    fetchSelectedProfileProducts();
  };

  return (
    <Select
      defaultValue={selectedProfile ? selectedProfile : user}
      maxW={160}
      onChange={(e) => handleSelect(e)}
    >
      <option value="boris">boris</option>
      <option value="andrea">andrea</option>
      <option value="kalos">kalos</option>
      <option value="allegra">allegra</option>
    </Select>
  );
};
