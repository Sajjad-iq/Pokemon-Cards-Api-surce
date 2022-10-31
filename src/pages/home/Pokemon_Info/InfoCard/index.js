import React from 'react'

export const INFO_CARD = ({ Height, Weight, Experience, Abilities, Type }) => {
    return (
        <section className='d-flex w-75  justify-content-between p-3 rounded  bg-info'>
            <article className='w-50'>
                <p className='h5' >Height</p>
                <p className='text-dark p-0 h6'>{Height}</p>
                <p className='h5'>Weight</p>
                <p className='text-dark p-0 h6'>{Weight}</p>
                <p className='h5'>Experience</p>
                <p className='text-dark p-0 h6'>{Experience}</p>
            </article>

            <article className='w-50'>
                <p className='h5'>Abilities</p>
                <p className='text-dark p-0 h6'>{Abilities}</p>
                <p className='h5'>Type</p>
                <p className='text-dark p-0 h6'>{Type}</p>
            </article>
        </section>
    )
}
