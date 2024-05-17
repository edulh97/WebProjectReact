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
    housesService.addHouse(name, country, city, continent, price)
      .then(() => {
        getAllcomunityHouse();
        setFormData({ name: '', city: '', country: '', price: '', continent: '' });
      })
      .catch((error) => {
        console.error("Error adding house: ", error);
      });
  };

  const handleDelete = (idHouse) => {
    housesService.deleteHouse(idHouse)
      .then(() => {
        getAllcomunityHouse();
      })
      .catch((error) => {
        console.error("Error deleting house: ", error);
      });
  };

  return (
    <>
      <div>
        {comunityHouse.map((m) => (
          <div key={m.key} className="SeeCommunityHouses-house">
            <p>{m.name} - {m.price} - {m.city} in {m.country} in {m.continent}</p>
            <button>Modificar</button>
            <button onClick={() => handleDelete(m.key)}>Eliminar</button>
          </div>
        ))}
      </div>

      <div>
        <div className="CuestionarioNuevaCasa">
          <h2>Formulario</h2>
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

            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </>
  );
}
export default SeeCommunityHouses;
