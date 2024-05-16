import { useEffect, useState } from "react";
import housesService from "../../services/firebase/houses.service";

function Comunity() {
  const [comunityHouse, setcomunityHouse] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    ciudad: "",
    pais: "",
    precio: "",
    continente: ""
  });

  const getAllcomunityHouse = () => {
    housesService.getAllcomunityHouse().then((items) => {
      let auxcomunityHouse = [];
      items.forEach((item) => {
        const key = item.key;
        const data = item.val();

        auxcomunityHouse.push({
          name: data.name,
          price: data.price,
          country: data.country,
          city: data.city,
          continent: data.continent
        })
      })
      setcomunityHouse([...auxcomunityHouse]);
    })
  }

  useEffect(() => {
    getAllcomunityHouse();
  }, [])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, ciudad, pais, precio, continente } = formData;

    housesService.addHouse(nombre, pais, ciudad, continente, precio).then(() => {
      getAllcomunityHouse(); // Actualiza la lista de casas después de añadir una nueva
      setFormData({
        nombre: "",
        ciudad: "",
        pais: "",
        precio: "",
        continente: ""
      }); // Limpia el formulario después de añadir una casa
    }).catch(error => {
      console.error("Error adding house: ", error);
    });
  };


  return (
    <>
      <div>
        <div className="test1">
          {
            comunityHouse.map((m) => (
              <p>{m.name} - {m.price} - {m.city} in {m.country} IN IN {m.continent} </p>

            ))
          }
        </div>
        <div className="CuestionarioNuevaCasa">
          <h2>Formulario</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label><br />
            <input type="text" id="nombre" name="nombre" onChange={handleChange} value={formData.nombre} /><br /><br />

            <label htmlFor="ciudad">Ciudad:</label><br />
            <input type="text" id="ciudad" name="ciudad" onChange={handleChange} value={formData.ciudad} /><br /><br />

            <label htmlFor="pais">País:</label><br />
            <input type="text" id="pais" name="pais" onChange={handleChange} value={formData.pais} /><br /><br />

            <label htmlFor="precio">Precio:</label><br />
            <input type="text" id="precio" name="precio" onChange={handleChange} value={formData.precio} /><br /><br />

            <label htmlFor="continente">Continente:</label><br />
            <input type="text" id="continente" name="continente" onChange={handleChange} value={formData.continente} /><br /><br />

            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Comunity;