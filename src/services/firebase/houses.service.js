import { equalTo, get, orderByChild, query, ref } from "firebase/database";
import db from "./firebase.config.js";

const getAllHouses = (selectedOption) => {
  const refHouse = ref(db, `/Houses/${selectedOption}`);
  return get(refHouse);
}

export default {
  getAllHouses
}