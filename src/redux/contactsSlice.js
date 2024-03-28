import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import contactList from "../contactList.json"

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: contactList
    },
    reducers: {
        addContact: {
            reducer: (state, action) => {
            state.items.push(action.payload);
            },
            prepare: (value) => {
                return {
                    payload: {
                        ...value,
                        id: nanoid()
                    }
                }
            }
        },
        deleteContact(state, action) {
            const index = state.items.findIndex(
                contact => contact.id === action.payload
            );
            state.items.splice(index, 1);
        },
    }
})

export const { addContact, deleteContact } = slice.actions;
export const getContacts = state => state.contacts.items;
export default slice.reducer;