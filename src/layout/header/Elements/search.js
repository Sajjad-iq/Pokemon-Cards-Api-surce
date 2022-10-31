import React, { useState, useCallback, useEffect } from 'react'
import { fetchPokemon } from '../../../services/fetchData'
import { useDispatch } from 'react-redux'
import { SEARCH_BUTTON } from '../../../components/common/SearchButton'
import { INPUT } from '../../../components/common/Input'

export const SEARCH = () => {
    const [inputValue, setInputValue] = useState("ivysaur")
    const dispatch = useDispatch()
    const onChange = useCallback((e) => { setInputValue(e.target.value.toLowerCase()) }, [setInputValue])
    const onClick = () => dispatch(fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${inputValue}`))
    useEffect(() => {
        dispatch(fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${inputValue}`))
    }, [])

    return (
        <section className='w-100 d-flex flex-row align-items-center justify-content-center'>
            <INPUT onChange={onChange} />
            <SEARCH_BUTTON label="search" onClick={onClick} />
        </section>
    )
}
