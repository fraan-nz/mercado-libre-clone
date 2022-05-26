import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/categoriesSlice";
import userReducer from "./features/userSlice";

const store = configureStore({
	reducer: {
		user: userReducer,
		categories: categoriesReducer,
	},
});

export default store;
