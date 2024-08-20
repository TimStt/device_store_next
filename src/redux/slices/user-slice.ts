import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserFree, IUserStateFree } from "@/shared/types/auth";
import { HYDRATE } from "next-redux-wrapper";

const initialState: IUserStateFree = {
  user: {
    id: "",
    username: "",
    email: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserFree>) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
      HYDRATE,
      (state, { payload }) => {
        if (payload.user) {
          state.user = payload.user.user;
        }
      }
    );
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
