//@ts-check
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authApi";

//Get user from local storage
/** @type {{ name : String, email : String, password : String, phoneNumber : String}} */
// @ts-ignore
const user = JSON.parse(localStorage.getItem("user"));

/** @type {{ isAuthenticated : Boolean, isError : Boolean, isLoading : Boolean, isSuccess : Boolean, user: user | null, message: string | undefined}} */
const initialState = {
    isAuthenticated: false,
    isError: false,
    isLoading: false,
    isSuccess: false,
    user: user ? user : null,
    message: '',
}

//Create a slice for auth
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        reset : (state) => {
            state.isAuthenticated = false;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
            state.user = null;
        },
        resetSuccess : (state) => {
            state.isSuccess = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.isLoading = true;
                state.message = 'Cargando...';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = 'Login exitoso';
            })
            .addCase(login.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error.message;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isAuthenticated = false;
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = false;
                state.message = 'Logout exitoso';
                state.user = null;
            })
        }
});

//Login
export const login = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            return await authService.login(data);
        }
        catch (error) {
            const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString();
            return rejectWithValue(message);
        }
    }
);

//logout
export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        await authService.logout();
    }
);

export const { setLoading, reset, resetSuccess } = authSlice.actions;
export default authSlice.reducer;
