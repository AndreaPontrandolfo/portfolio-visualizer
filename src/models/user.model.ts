// @ts-nocheck

import { action, thunk } from "easy-peasy";
import { any } from "ramda";
import { database } from "../services/database";

export const userModel = {
  user: "",
  verifyUser: thunk(async (actions, payload) => {
    try {
      const passcodesRef = database.ref("passcodes");
      passcodesRef.on("value", (snapshot) => {
        const data = snapshot.val();
        actions.setAuthenticatedUser({ passcodes: data, username: payload });
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: user.model.ts ~ line 27 ~ verifyUser:thunk ~ error",
        error
      );
    }
  }),
  setAuthenticatedUser: action((state, { passcodes, username }) => {
    const matchAPasscode = (name) => name === username;
    if (any(matchAPasscode)(passcodes)) {
      state.user = username;
    }
  }),
  selectedProfile: "",
  setSelectedProfile: action((state, payload) => {
    state.selectedProfile = payload;
  }),
};
