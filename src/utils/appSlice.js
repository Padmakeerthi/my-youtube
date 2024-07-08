import { createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state) =>{
            state.isMenuOpen = !state.isMenuOpen
        },
        clearMenu: (state)=>{
            state.isMenuOpen = false;
        }
    }
});
console.log(appSlice,"appslice");
export const { toggleMenu, clearMenu} = appSlice.actions;
export default appSlice.reducer;