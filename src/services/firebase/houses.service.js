import { get, ref, push } from "firebase/database";
import db from "./firebase.config.js";

const refComunity = ref( db, "/Comunity");

const getAllHouses = (selectedOption) => {
  const refHouse = ref(db, `/Houses/${selectedOption}`);
  return get(refHouse);
}

const getAllcomunityHouse = () => {
  return get(refComunity)
}

//Adaptado
const addHouse = (houseName, country, city, continent, price) => {
  return push(refComunity, {
    name: houseName,
    country: country,
    city: city,
    continent: continent,
    price: price
  });
};

//-------------- del profe

// const deleteProduct = (idProducto) => {
//   const productRef = ref(db, `/products/${idproducto}`)
//   return remove(productRef);
// }

// const updateProduct = (idProducto, name, price) => {
//   const productRef = ref(db, `/products/${idproducto}`)
//   return update(productRef, {
//     name: name,
//     price: price
//   })
// }

export default {
  getAllHouses,
  getAllcomunityHouse,
  addHouse,
}