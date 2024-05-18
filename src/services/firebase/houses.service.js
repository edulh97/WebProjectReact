import { get, ref, push, update, remove } from "firebase/database";
import db from "./firebase.config.js";

const refComunity = ref( db, "/Comunity/");

const getAllHouses = (selectedOption) => {
  const refHouse = ref(db, `/Houses/${selectedOption}`);
  return get(refHouse);
}

const getAllcomunityHouse = () => {
  return get(refComunity)
}

const addHouse = (houseName, country, city, continent, price) => {
  return push(refComunity, {
    name: houseName,
    country: country,
    city: city,
    continent: continent,
    price: price
  });
};

 const updateHouse = async (idHouse, name, price, city, continent, country) => {
  const CommunityRef = ref(db, `/Comunity/${idHouse}`)
  try {
     await update(CommunityRef, {
       name: name,
       price: price,
       city: city,
       country: country,
       continent: continent
     });
     console.log("Casa actualizada correctamente");
   } catch (error) {
     console.error("Error al actualizar la casa:", error);
   }
}

const deleteHouse = (idHouse) => {
  const CommunityRef = ref(db, `/Comunity/${idHouse}`)
  return remove(CommunityRef);
}



export default {
  getAllHouses,
  getAllcomunityHouse,
  addHouse,
  updateHouse,
  deleteHouse
}