import { get, ref, push, update } from "firebase/database";
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

export const updateHouse = (idHouse, name, price) => {
  const CommunityRef = ref(db, `/Comunity/${idHouse}`)
  return update(CommunityRef, {
    name: name,
    price: price
  }).then(() => {
    console.log("Casa actualizada correctamente");
  })
  .catch(error => {
    console.error("Error al actualizar la casa:", error);
  });
}

//-------------- del profe

// const deleteProduct = (idProducto) => {
//   const productRef = ref(db, `/products/${idproducto}`)
//   return remove(productRef);
// }



export default {
  getAllHouses,
  getAllcomunityHouse,
  addHouse,
  updateHouse,
}