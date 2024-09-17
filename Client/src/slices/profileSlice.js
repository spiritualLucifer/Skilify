import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  // yeah pe code fat gya tha ,because humne local storage ke andar user ko store nhi kara tha(saten)

  user: null,
  loading: false,
}

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload
    },
    setLoading(state, value) {
      state.loading = value.payload
    },
  },
})

export const { setUser, setLoading } = profileSlice.actions

export default profileSlice.reducer
