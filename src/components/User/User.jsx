import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams();
    return (
        <div className='flex items-center justify-center bg-gray-600 text-white p-8 text-4xl'><h1>User {userid}</h1></div>
    )
}

export default User