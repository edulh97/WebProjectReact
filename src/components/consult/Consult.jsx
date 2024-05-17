import './consult.css'
import { useEffect, useState } from "react";
import housesService from "../../services/firebase/houses.service";

function Consult() {
  const [houses, setHouses] = useState([]);
  const [selectedOption, setSelectedOption] = useState('EEUU');

  const getAllHouses = () => {
    housesService.getAllHouses(selectedOption).then((items) => {
      let auxHouses = [];
      items.forEach((item) => {
        const key = item.key;
        const data = item.val();

        auxHouses.push({
          key: key,
          name: data.name,
          country: data.country,
          city: data.city
        })
      })
      setHouses([...auxHouses]);
    })
  }

  useEffect(() => {
    getAllHouses();
  }, [selectedOption]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="consult-row">
        <div className='consult-message'>  
        <h2>Check out our current homes for sale</h2>
          <p>From WhiteRock we are committed to ensure that the following houses are perfectly habitable and comply with all safety measures and regulations. In case you want to know the approximate price (initial sale price, because if you want to add or modify things in the house the price varies) please contact us in the CONTACT section and send us the exact name of the house to provide you with the initial price.</p>
        </div>
        <aside>
          <h2>Choose region</h2>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="EEUU">EEUU</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
          </select>
        </aside>
        <section>
          <p>We currently have the following houses in {selectedOption} :</p>
          {
            houses.map((h) => (
              <div key={h.key} className='consult-houses'>
              <p> {h.key}  {h.name} in the city of {h.city} from {h.country} </p>
              </div>
            ))
          }
        </section>
      </div>
    </>
  );
}

export default Consult;