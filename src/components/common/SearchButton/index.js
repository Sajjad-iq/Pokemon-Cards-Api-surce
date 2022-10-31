import React from 'react'

export const SEARCH_BUTTON = React.memo(({ onClick, label }) => {
    return (
        <button className='border-0 rounded ms-3' onClick={onClick}>{label}</button>
    )
})
