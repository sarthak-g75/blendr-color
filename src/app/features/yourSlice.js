import { createSlice } from '@reduxjs/toolkit';

export const yourSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0,
	},
	reducers: {
		yourReducer: state => {
			state.value += 1;
		},
	},
});

// Action creators are generated for each case reducer function
export const { yourReducer } = yourSlice.actions;

export default yourSlice.reducer;
