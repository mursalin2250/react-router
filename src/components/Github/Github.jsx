import React, { useState ,useEffect } from 'react'

const Github = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        (async () =>{
            const data = await fetch("https://api.github.com/users/mursalin2250");
            const res = await data.json();
            setData(res);
        })()
    }, []);
    console.log(data);
    return (
        <div>

        </div>
    )
}

export default Github  