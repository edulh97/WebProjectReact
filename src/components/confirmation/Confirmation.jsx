import { useEffect, useState } from "react";
import db from "../../services/firebase/firebase.config";
import { get, ref } from "firebase/database";
import TextInput from "../../components/filtre/TextInput";
import './confirmation.css';

function Confirmation() {
    const [houses2, setHouses2] = useState([]);
    const [filterValue, setFilterValue] = useState('');

    const getAllHouses2 = (filterValue, db) => {
        const refHouse2 = ref(db, '/Houses');
        return get(refHouse2).then((snapshot) => {
            const houses = [];
            snapshot.forEach((regionSnapshot) => {
                regionSnapshot.forEach((houseSnapshot) => {
                    const houseData = houseSnapshot.val();
                    houses.push({
                        city: houseData.city,
                        country: houseData.country,
                        name: houseData.name,
                        price: houseData.price,
                        SqFt: houseData.SqFt,
                        baths: houseData.baths,
                        beds: houseData.beds
                    });
                });
            });
            return houses.filter((house) => house.name === filterValue);
        });
    };

    useEffect(() => {
        getAllHouses2(filterValue, db).then((filteredHouses) => {
            setHouses2(filteredHouses);
        });
    }, [filterValue]);

    const handleFilterChange = (value) => {
        setFilterValue(value);
    };

    return (
        <>
            <div className="confirmation-row">
                <aside>
                    <h3>Enter the project</h3>
                    <TextInput onInputChange={handleFilterChange} />
                </aside>
                <section>
                    {
                        houses2.map((h, index) => (
                            <div className="house-info" key={index}>
                                <p>
                                    Remember that this house is located in <strong>{h.city}, {h.country}</strong>.
                                    <br />
                                    Square feet: {h.SqFt}
                                    <br />
                                    Beds: {h.beds}
                                    <br />
                                    Baths: {h.baths}
                                    <br />
                                    The initial price is <strong>{h.price} €</strong>
                                </p>
                            </div>
                        ))
                    }

                </section>
            </div>
        </>
    );
}

export default Confirmation;
