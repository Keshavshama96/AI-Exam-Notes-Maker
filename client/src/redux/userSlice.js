import { createSlice } from "@reduxjs/toolkit";

// User slice
const userSlice = createSlice({
  name: "user",
  // Initial state
  initialState: {
    userData: null,
  },

  reducers: {
    // Update user data
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
     updateCredits:(state,action)=>{
   if(state.userData){
   state.userData.credits = action.payload
           }
        }
      },
   });

// Export action
export const { setUserData,updateCredits } = userSlice.actions;

// Export reducer
export default userSlice.reducer;