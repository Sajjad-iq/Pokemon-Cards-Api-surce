import React from 'react'

export const NAME_AND_RANK = ({ name, rank }) => {
    return (
        <section className=' w-50 d-flex justify-content-between align-items-center '>
            <p className='h1'>{name}</p>
            <p className='h2'>{rank}</p>
        </section>
    )
}
