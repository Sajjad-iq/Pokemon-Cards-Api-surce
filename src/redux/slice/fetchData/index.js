import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemon } from "../../../services/fetchData";

const initialState = {
    loading: true,
    pokemonList: {},
}

const PokemonSlice = createSlice({
    name: "pokemonListFetch",
    initialState,
    extraReducers: {
        [fetchPokemon.fulfilled]: (state, action) => {
            state.pokemonList = action.payload
            state.loading = false
        }
    }
})

export default PokemonSlice.reducer