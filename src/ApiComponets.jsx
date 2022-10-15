import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';

function ApiComponets() {
    const [details, setDetails] = useState([]);
    const mainFunctionHandle = () => {
        const api = "https://jsonplaceholder.typicode.com/posts";
        fetch(api)
            .then((res) => res)
            .then((result) => result.json())
            .then((data) => setDetails(data))
            .catch((err) => console.log("error", err));
    }
    console.log(details);
    useEffect(() => {
        mainFunctionHandle()
    }, [])
    console.log(Array.isArray(details));
    return (
        <>
            {details.map(function (element) {
                return (
                    <>
                        <h1>{element.id}</h1>
                        <h6>{element.title}</h6>
                        
                    </>
                )
            })}

        </>
    )
}

export default ApiComponets