import { useEffect, useState } from "react";
import housesService from "../../../services/firebase/houses.service";

function ReadCommunityHouses() {
  const [formData, setFormData] = useState({
    nombre: "",
    ciudad: "",
    pais: "",
    precio: "",
    continente: ""
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <>
      <div>
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

export default ReadCommunityHouses;