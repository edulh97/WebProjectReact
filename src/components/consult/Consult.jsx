import './consult.css'
import { useEffect, useState } from "react";
import housesService from "../../services/firebase/houses.service";
import CommunityHouses from '../comunity/community-Houses/CommunityHouses';

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
          <p>From WhiteRock we are committed to ensure that the following houses are perfectly habitable and comply with all safety measures and regulations.
          In case you want to know the details of the house please contact us in the CONTACT section. </p>
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
                <p> Project {h.name} in the city of {h.city} from {h.country} </p>
              </div>
            ))
          }
        </section>
        <div className='CommunityHouses-container'>
          <p>Currently the community has offered us the following houses for renovation. When we have finished the purchase and renovation process, we will add them to our projects and you will be able to consult their details and price. </p>
          <CommunityHouses />
        </div>
      </div>
    </>
  );
}

export default Consult;