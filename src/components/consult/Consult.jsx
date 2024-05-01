import './consult.css'
import { useEffect, useState } from "react";
import housesService from "../../services/firebase/houses.service";

function Consult() {
  const [houses, setHouses] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const getAllHouses = () => {
    housesService.getAllHouses(selectedOption).then((items) => {
      let auxHouses = [];
      items.forEach((item) => {
        const key = item.key;
        const data = item.val();

        auxHouses.push({
          name: data.name,
          country: data.country,
          city: data.city
        })
      })
      setHouses([...auxHouses]);
    })
  }

  useEffect(() => {
    getAllHouses(); // Llama a getAllHouses() después de que selectedOption se actualice
  }, [selectedOption]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="consult-row">
        <aside>
          <h2>Consulta</h2>
          <p>Ingrese la region</p>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="EEUU">EEUU</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
          </select>
        </aside>
        <section>
          <h2>Respuesta</h2>
          <p>Casas disponibles actualmente {selectedOption}</p>
          {
            houses.map((h) => (
              <p> * {h.name} in the city of {h.city} from {h.country} </p>
            ))
          }

        </section>
      </div>
    </>
  );
}

export default Consult;