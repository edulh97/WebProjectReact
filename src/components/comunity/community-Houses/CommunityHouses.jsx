import { useEffect, useState } from "react";
import housesService from "../../../services/firebase/houses.service";
import CreateCommunityHouse from "../createCommunityHouse/CreateCommunityHouse";
import ReadCommunityHouses from "../readCommunityHouses/ReadCommunityHouses";

function CommunityHouses() {
    const [comunityHouse, setcomunityHouse] = useState([]);

    const getAllcomunityHouse = () => {
        housesService.getAllcomunityHouse().then((items) => {
            let auxcomunityHouse = [];
            items.forEach((item) => {
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

    return (
        <div>
            <CreateCommunityHouse getAllcomunityHouse={getAllcomunityHouse} />
            <ReadCommunityHouses comunityHouse={comunityHouse} />
        </div>
    );
}

export default CommunityHouses;