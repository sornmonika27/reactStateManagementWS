import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserItem {
    name: string;
}

const initialState: UserItem = {
    name: "ka",
};


const user = createSlice ({
    name: "user",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
    },
});

export const { setName } = user.actions;
export default user.reducer;