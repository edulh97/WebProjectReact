import { get, ref } from "firebase/database";
import db from "./firebase.config.js";
//import { selectedOption}  from "../../components/consult/Consult.jsx";

//const refHouse = ref(db, "/Houses/Europe");

const getAllHouses = (selectedOption) => {
  const refHouse = ref(db, `/Houses/${selectedOption}`);
  return get(refHouse);
}

/** 
const getAllHouses = () => {
  return get(refHouse)
}
*/
export default {
  getAllHouses
}