import React from 'react'

export const INPUT = React.memo(({ onChange }) => {
    console.log("ok")
    return (
        <input type={'search'} className="w-75 border-0 rounded  " onChange={onChange} />
    )
})
