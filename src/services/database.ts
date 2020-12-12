import firebase from "firebase/app";
import "firebase/database";
import { firebaseConfig } from "../configs/firebaseConfig";

firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
