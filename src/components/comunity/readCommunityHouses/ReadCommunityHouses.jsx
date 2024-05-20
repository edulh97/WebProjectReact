import { useEffect, useState } from "react";
import housesService from "../../../services/firebase/houses.service";
import './readCommunityHouses.css';

function ReadCommunityHouses() {
  const [comunityHouse, setcomunityHouse] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    country: '',
    SqFt: ''
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, city, country, SqFt } = formData;
    if (editingHouse) {
      housesService.updateHouse(editingHouse, name, city, SqFt, country)
        .then(() => {
          getAllcomunityHouse();
          setFormData({ name: '', city: '', country: '', SqFt: '', email: '' });
          setEditingHouse(null);
        })
        .catch((error) => {
          console.error("Error updating house: ", error);
        });
    } else {
      housesService.addHouse(name, country, city, SqFt)
        .then(() => {
          getAllcomunityHouse();
          setFormData({ name: '', city: '', country: '', SqFt: '' });
        })
        .catch((error) => {
          console.error("Error adding house: ", error);
        });
    }
  };

  const handleDelete = (idHouse) => {
    const inputName = window.prompt("Please enter the key that we have sent to your email when you enter your home (write anything, it is an example)");
    if (inputName) {
      housesService.deleteHouse(idHouse)
        .then(() => {
          getAllcomunityHouse();
        })
        .catch((error) => {
          console.error("Error deleting house: ", error);
        });
    } else {
      alert("You cannot leave this field blank");
    }
  };

  const handleEdit = (house) => {
    const inputName = window.prompt("please enter the key that we have sent to your email when you enter your home (write anything, it is an example)");
    if (inputName) {
      setFormData({
        name: house.name,
        city: house.city,
        country: house.country,
        SqFt: house.SqFt
      });
      setEditingHouse(house.key);
    } else {
      alert("You cannot leave this field blank");
    }
  };

  return (
    <>
      <h1>Your requests</h1>
      <div className="communityHouses-container">

        {comunityHouse.map((m) => (
          <div key={m.key} className="ReadCommunityHouses-house">
            <p>{m.name} has published a house in {m.city}, {m.country} with {m.SqFt} SqFt.</p>
            <button onClick={() => handleEdit(m)}>Update</button>
            <button onClick={() => handleDelete(m.key)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="house-form-container">
        <div className="SalesForm">
          <h2>{editingHouse ? "Update house" : "Sales form"}</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your name:</label><br />
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} /><br /><br />

            <label htmlFor="email">Email:</label><br />
            <input type="text" id="email" name="email" onChange={handleInputChange} /><br /><br />

            <h2>House information</h2>

            <label htmlFor="city">City:</label><br />
            <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} /><br /><br />

            <label htmlFor="country">Country:</label><br />
            <input type="text" id="country" name="country" value={formData.country} onChange={handleInputChange} /><br /><br />

            <label htmlFor="SqFt">Square feet:</label><br />
            <input type="text" id="SqFt" name="SqFt" value={formData.SqFt} onChange={handleInputChange} /><br /><br />

            <input type="submit" value={editingHouse ? "Update house" : "Sales form"} />
          </form>
        </div>
      </div>

    </>
  );
}
export default ReadCommunityHouses;
