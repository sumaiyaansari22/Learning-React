import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    //const [data, setData] = useState({});
    //useEffect(() => {
      //  fetch('https://api.github.com/users/sumaiyaansari22')
        //    .then(res => res.json())
          //  .then(data => setData(data))
    //}, [])
    
    return(
        <div className='grid justify-center bg-gray-100 text-3xl text-center m-5'>
            <img className='m-5' src={data.avatar_url} alt="Git picture" width={300} />
            <h1 className='underline'>{data.name}</h1>
            <h1>Public Repositories : {data.public_repos}</h1>
        </div>
    )

}


export default Github;

export const githubLoader = async () => {
    const res = await fetch('https://api.github.com/users/sumaiyaansari22');
    return res.json();
}