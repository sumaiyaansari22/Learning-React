import React, { useEffect, useState } from 'react';
import { useFormContext } from '../../Context/FormContext';

function Card() {


    const [userDetails,setUseDetails]= useState("");

    useEffect(() => {
        const info = JSON.parse(localStorage.getItem("currUser"));
        const user = JSON.parse(localStorage.getItem(info));
        setUseDetails(user);

    },[])

    return (
        <div className='flex mt-56 border-black border-2'>
            <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold text-black">{userDetails.firstName}</dt>
                    <dd class="text-gray-500 dark:text-gray-400">FirstName</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold text-black">{userDetails.lastName}</dt>
                    <dd class="text-gray-500 dark:text-gray-400">LastName</dd>
                </div>
                <br/>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold text-black">{userDetails.email}</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Email</dd>
                </div>
                <br/>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold text-black">{userDetails.password}</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Password</dd>
                </div>
            </dl>
        </div>
    )
}

export default Card