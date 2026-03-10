// import React, { useState ,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData();

    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     (async () =>{
    //         const data = await fetch("https://api.github.com/users/mursalin2250");
    //         const res = await data.json();
    //         setData(res);
    //     })()
    // }, []);

    return (
        <div className='flex justify-center py-10 w-full px-8 gap-20'>
            <div className="split w-[50%] flex justify-end">
               <img src={data.avatar_url} alt="" className='rounded-2xl' /> 
            </div>
            <div className="split w-[50%] flex flex-col justify-center items-start">
                <p className='px-3 bg-orange-700 rounded-full text-white'><a href={data.html_url} target='blank'>{data.login}</a></p>
                <h1 className='text-4xl mt-3 font-bold'>{data.name}</h1>
                <div className='pt-8 flex flex-col gap-2'>
                    <p className='w-[80%]'><span className='font-bold'>Bio:</span> {data.bio}</p>
                    <p><span className='font-bold'>Followers:</span> <a href={data.followers_url} target='_blank'>{data.followers}</a></p>
                    <p><span className='font-bold'>Following:</span> <a href={data.following_url} target='_blank'>{data.following}</a></p>
                    <p><span className='font-bold'>Github repositories:</span> {data.public_repos}</p>
                    <p><span className='font-bold'>Portfolio:</span> {data.blog}</p>
                    <p><span className='font-bold'>Company:</span> {data.company}</p>
                    <p><span className='font-bold'>Location:</span> {data.location}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Github  

export const githubInfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/mursalin2250");
    return res.json();
}
