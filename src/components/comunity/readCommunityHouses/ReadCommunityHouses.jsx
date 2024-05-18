import { useEffect, useState } from "react";
import housesService from "../../../services/firebase/houses.service";

function SeeCommunityHouses() {
  const [comunityHouse, setcomunityHouse] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    country: '',
    price: '',
    continent: ''
  });
  const [editingHouse, setEditingHouse] = useState(null);
  

  const getAllcomunityHouse = () => {
    housesService.getAllcomunityHouse().then((snapshot) => {
      let auxcomunityHouse = [];
      snapshot.forEach((item) => {
        const key = item.key;
        const data = item.val();

        auxcomunityHouse.push({
          key: key,
          name: data.name,
          price: data.price,
          country: data.country,
          city: data.city,
          continent: data.continent
        });
      });
      setcomunityHouse([...auxcomunityHouse]);
    });
  };

  useEffect(() => {
    getAllcomunityHouse();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, city, country, price, continent } = formData;
    if (editingHouse) {
      housesService.updateHouse(editingHouse, name, price, city, continent, country)
      .then(() => {
          getAllcomunityHouse();
          setFormData({ name: '', city: '', country: '', price: '', continent: '', email: ''});
          setEditingHouse(null);
        })
        .catch((error) => {
          console.error("Error updating house: ", error);
        });
    } else {
      housesService.addHouse(name, country, city, continent, price)
        .then(() => {
          getAllcomunityHouse();
          setFormData({ name: '', city: '', country: '', price: '', continent: '' });
        })
        .catch((error) => {
          console.error("Error adding house: ", error);
        });
    }
  };

  const handleDelete = (idHouse) => {
    const inputName = window.prompt("Por favor, escribe tu nombre para confirmar la eliminación:");
    if (inputName) {
      housesService.deleteHouse(idHouse)
        .then(() => {
          getAllcomunityHouse();
        })
        .catch((error) => {
          console.error("Error deleting house: ", error);
        });
    } else {
      alert("El nombre introducido no es válido. La casa no será eliminada.");
    }
  };

  const handleEdit = (house) => {
    const inputName = window.prompt("Por favor, escribe tu nombre para confirmar la modificación:");
    if (inputName) {
      setFormData({
        name: house.name,
        city: house.city,
        country: house.country,
        price: house.price,
        continent: house.continent
      });
      setEditingHouse(house.key);
    } else {
      alert("El nombre introducido no es válido. No se puede modificar la casa.");
    }
  };

  return (
    <>
      <div>
        {comunityHouse.map((m) => (
          <div key={m.key} className="SeeCommunityHouses-house">
            <p>{m.name} - {m.price} - {m.city} in {m.country} in {m.continent}</p>
            <button onClick={() => handleEdit(m)}>Modificar</button>
            <button onClick={() => handleDelete(m.key)}>Eliminar</button>
          </div>
        ))}
      </div>

      <div>
        <div className="CuestionarioNuevaCasa">
          <h2>{editingHouse ? "Actualizar Casa" : "Formulario"}</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label><br />
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} /><br /><br />

            <label htmlFor="city">Ciudad:</label><br />
            <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} /><br /><br />

            <label htmlFor="country">País:</label><br />
            <input type="text" id="country" name="country" value={formData.country} onChange={handleInputChange} /><br /><br />

            <label htmlFor="price">Precio:</label><br />
            <input type="text" id="price" name="price" value={formData.price} onChange={handleInputChange} /><br /><br />

            <label htmlFor="continent">Continente:</label><br />
            <input type="text" id="continent" name="continent" value={formData.continent} onChange={handleInputChange} /><br /><br />

            <label htmlFor="email">Email:</label><br />
            <input type="text" id="email" name="email" onChange={handleInputChange} /><br /><br />

            <input type="submit" value={editingHouse ? "Actualizar" : "Enviar"} />
          </form>
        </div>
      </div>
    </>
  );
}
export default SeeCommunityHouses;
