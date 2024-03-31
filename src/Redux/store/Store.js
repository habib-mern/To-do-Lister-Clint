import { configureStore } from '@reduxjs/toolkit';
import { profileSlice } from '../slices/profileSlice'; // Import as a named export

export default configureStore({
    reducer: {
        profile: profileSlice.reducer // Access the reducer property of profileSlice
    }
});
