
import React, { useEffect, useState } from 'react';
import './index.css';

const App = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}
            &appid=b998f4faf7c4ee408a5a0e136e27af6d`;
            const responce = await fetch(url);
            const resJson = await responce.json();
            setCity(resJson.main);
        };
        fetchApi();
    }, [search]);
    return (
        <>
            <div className="main_box">
                <div className="inputdata">
                    <input type="search"
                        className="inputField"
                        value={search}
                        onChange={(event) => { setSearch(event.target.value) }} />
                    {!city ? (
                        <p className="nodatafound">No Data Found</p>
                    ) : (
                        <>
                            <div className="info">
                                <h2 className="location"> <i class="fas fa-street-view"></i> {search}</h2>
                                <h1 className="temp">{city.temp} °Cel</h1>
                                <h3 className="tempmin_max">Min :{city.temp_min} °Cel |
                                 Max : {city.temp_max} °Cel</h3>
                            </div>
                            <div className="one"></div>
                        </>)}

                </div>
            </div>
        </>
    );
}
export default App;