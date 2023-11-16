'use client'

import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import reducer from "./reducers";

export const store = configureStore({
	reducer: {
		projectPopin: reducer
	}
})

const makeStore = () => store;

export const wrapper = createWrapper(makeStore, {debug: true});