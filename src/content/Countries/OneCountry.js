import React from 'react'
import { useParams } from "react-router-dom";

function OneCountry() {
    const { name } = useParams();
    console.log(name);
    return (
        <div>
            {name}
        </div>
    )
}

export default OneCountry
