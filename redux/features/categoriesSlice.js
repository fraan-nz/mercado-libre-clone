import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
	name: "user",
	initialState: {
		categories: [],
	},
	reducers: {
		load(state, action) {
			state.categories = [...action.payload];
		},
	},
});

const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;

export const { load } = categoriesSlice.actions;
