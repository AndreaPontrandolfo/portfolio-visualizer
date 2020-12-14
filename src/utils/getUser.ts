import { database } from "../services/database";

export const getUser = () => {
  const ref = database.ref("/");

  return ref.on("value", (snapshot: any) => {
    const data = snapshot.val();
  });
};
