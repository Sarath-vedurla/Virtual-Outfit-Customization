import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload; // Return the new user data
        },
        removeUser: () => {
            return null; // Reset the state to null
        }
    }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
