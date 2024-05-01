import { useEffect, useState } from "react";
import db from "../../services/firebase/firebase.config";
import { get, ref } from "firebase/database";
import TextInput from '../filtre/TextInput';

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
                        name: houseData.name
                    });
                });
            });
            return houses.filter((house) => house.city === filterValue);
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
            <div className="consult-row">
                <aside>
                    <h2>Consulta</h2>
                    <p>Ingrese la ciudad</p>
                    <TextInput onInputChange={handleFilterChange} />
                </aside>
                <section>
                    <h2>Respuesta</h2>
                    <p>Casas disponibles actualmente</p>
                    {
                        houses2.map((h, index) => (
                            <p> * {h.name} in {h.country} </p>
                        ))
                    }
                </section>
            </div>
        </>
    );
}

export default Confirmation;
