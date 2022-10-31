import { configureStore } from "@reduxjs/toolkit";
import PokemonSlice from "../slice/fetchData"

export const store = configureStore({
    reducer: {
        poke: PokemonSlice,
    }

})




