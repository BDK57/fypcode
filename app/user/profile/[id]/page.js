import React from 'react'

const page = ({ params }) => {
    return (
        <div className='bg flex justify-center items-center flex-col gap-5'>
            <h1 className='text-9xl'>Profile page</h1>
            <h2 className='text-3xl text-bold mt-5'>
                Profile ID: {params.id}
            </h2>
        </div>
    )
}

export default page