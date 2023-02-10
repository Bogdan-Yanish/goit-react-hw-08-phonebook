import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://63e6627fc8839ccc28574440.mockapi.io";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async(_, thunkApi) => {
        try {
            const { data }= await axios.get("/contacts");
            return data;            
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async({ name, phone}, thunkApi) => {
        try {
            const { data } = await axios.post("/contacts", { name, phone});
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async(id, thunkApi) => {
        try {
            const { data } = await axios.delete(`/contacts/${id}`);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

