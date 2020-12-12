import { database } from "../services/database";

export const getUser = () => {
  const ref = database.ref("/");

  return ref.on("value", (snapshot: any) => {
    const data = snapshot.val();
    console.log("🚀 ~ file: getUser.ts ~ line 8 ~ returnref.on ~ data", data);
  });
};
