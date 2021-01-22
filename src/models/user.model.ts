// @ts-nocheck

import { action } from "easy-peasy";
import { any } from "ramda";

const passcodes = ["andrea", "boris", "francesco", "kalos"];

export const userModel = {
  user: "",
  verifyUser: action((state, payload) => {
    const matchAPasscode = (name) => name === payload;
    if (any(matchAPasscode)(passcodes)) {
      state.user = payload;
    }
  }),
  selectedProfile: "",
  setSelectedProfile: action((state, payload) => {
    state.selectedProfile = payload;
  }),
};
