import React, { useEffect, useState } from 'react'
import './css/style.css';

function Tempapp() {
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=46e04cbd8c6851f8623d82bc1bf78c79`;
            const response = await fetch(url)
            // console.log(response);
            const resJson = await response.json();
            // console.log(resJson);
            setcity(resJson.main);
        };
        fetchApi();
    },[search])
    console.log(city);
    return (
        <div>
        <h1 className='heading'>Weather Application</h1>
            <div className="box">
                <div className="inputData">
                    <input type="search"
                        className="inputField"
                        value={search}
                        onChange={(event) => {
                            setsearch(event.target.value)
                        }}
                    />
                </div>
                {
                    !city ? (
                        <p>No Data Found</p>
                    ) : (
                        <div>
                            <div className='info'>
                                <h2 className='location'>
                                    <i className="fa-solid fa-street-view"></i>{search}
                                </h2>
                                <h1 className="temp">
                                    {city.temp} ° cel
                                </h1>
                                <h3 className="tempmin_max">Min : {city.temp_min}° Cel | Max : {city.temp_max}° Cel </h3>
                                
                            </div>
                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>
                        </div>
                    )
                }


            </div>
        </div>
    )
}

export default Tempapp