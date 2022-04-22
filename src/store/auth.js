import { createSlice ,configureStore} from '@reduxjs/toolkit';
const initialAuthState = {
    isAuthenticated : false
};

const authSlice = createSlice({
    name: 'authentication',
    initialState : initialAuthState,
    reducers : {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

export default authSlice;
export const authentication = authSlice.actions;