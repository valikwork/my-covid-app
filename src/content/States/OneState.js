import React from 'react'
import { useParams } from "react-router-dom";

function OneState() {
    const { name } = useParams();
    console.log(name);
    return (
        <div>
            {name}
        </div>
    )
}

export default OneState
