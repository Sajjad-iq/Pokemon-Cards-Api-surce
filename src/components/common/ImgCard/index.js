import React from 'react'

export const IMG_CARD = ({ src = "" }) => {
    return (
        <section className='p-3 mw-100 h-100 d-flex justify-content-center '>
            <img src={src} alt="pokemon-img" className='mw-100' />
        </section>
    )
}
