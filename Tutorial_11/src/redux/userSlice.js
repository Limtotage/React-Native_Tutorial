import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firebase from 'firebase';

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }) => {
    console.log('User Mail: ', email);
    console.log('User Password: ', password);
    try {
      const auth = firebase.auth();
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;
      if (!user) {
        throw new Error('User data is missing.');
      }
      console.log(user)
      const token = await user.getIdToken();
      const userData = {
        token,
        user: user,
      };
      return userData;
    } catch (error) {
      console.error(error);
      console.log('userSliceError line export const login part');
      throw new Error(error.message);
    }
  }
);

const initialState = {
  isLoading: false,
  isAuth: false,
  token: null,
  user: null,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      if (action.payload) {
        const lowerCaseEmail = action.payload.toLowerCase();
        state.email = lowerCaseEmail;
      } else {
        console.error('Email is undefined');
      }
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        console.log('pending');
        state.isLoading = true;
        state.isAuth = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log('fulfilled');
        state.isAuth = true;
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        console.log('rejected');
        state.isLoading = false;
        state.isAuth = false;
        state.error = action.error.message;
      });
  },
});
export const { setEmail, setPassword, setIsLoading } = userSlice.actions;
export default userSlice.reducer;
