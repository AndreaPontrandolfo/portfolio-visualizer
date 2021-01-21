import { pipe } from "ramda";
import { trunc } from "ramda-adjunct";
import { removeComma } from "./removeComma";

export const normalizeNumber = pipe(removeComma, parseFloat, trunc);
