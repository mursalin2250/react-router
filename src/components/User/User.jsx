import React from 'react';
import { useParams } from "react-router-dom";

const User = () => {
    const {id} = useParams();

    return (
        <div className='bg-gray-500 text-white'>
            <h1>hello world</h1>
        </div>
    )
}

export default User