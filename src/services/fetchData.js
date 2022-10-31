import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemon = createAsyncThunk('pokemon', async (url) => {
    const response = await axios.get(url)
    return response.data
})
