import { useEffect, useState } from "react";
import housesService from "../../../services/firebase/houses.service";
import "./communityHouses.css";

function CommunityHouses() {
    
    const [comunityHouse, setcomunityHouse] = useState([]);
  
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
            SqFt: data.SqFt
          });
        });
        setcomunityHouse([...auxcomunityHouse]);
      });
    };
  
    useEffect(() => {
      getAllcomunityHouse();
    }, []);
 
    return (
      <>
        <div className="communityHouses-container">
          {comunityHouse.map((m) => (
            <div key={m.key} className="SeeCommunityHouses-house">
              <p>{m.name} has published a house in {m.city}, {m.country} with {m.SqFt} SqFt.</p>
            </div>
          ))}
        </div>
      </>
    );
  }

export default CommunityHouses;