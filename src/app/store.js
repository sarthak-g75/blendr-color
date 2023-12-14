import { configureStore } from '@reduxjs/toolkit';
import yourSlice from './features/yourSlice';

export default configureStore({
	reducer: {
		your: yourSlice,
	},
});
