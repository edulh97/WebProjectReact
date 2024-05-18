// import { useState } from "react";

// function UpdateCommunityHouse() {

//   const [idHouse, setIdHouse] = useState('');
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     updateHouse(idHouse, name, price);
//     setIdHouse('');
//     setName('');
//     setPrice('');
//     window.location.reload();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           ID de la Casa:
//           <input type="text" name="idHouse" value={idHouse} onChange={(e) => setIdHouse(e.target.value)} />
//         </label>
//       </div>
//       <div>
//         <label>
//           Nombre:
//           <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//       </div>
//       <div>
//         <label>
//           Precio:
//           <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
//         </label>
//       </div>
//       <button type="submit">Actualizar Casa</button>
//     </form>
//   );
// }

// export default UpdateCommunityHouse;