import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const partnershipSlice = createSlice({
  name: "partnership",
  initialState: {
    InfoPartnership: {
      fullName: "",
      numberPhone: null,
      email: "",
      country: "",
      region: "",
      city: "",
      field: "",
      link: "",
      message: "",
    },
    status: "idle",
    error: null,
  },
  reducers: {
    updateFullName(state, action) {
      state.InfoPartnership.fullName = action.payload;
    },
    updateNumberPhone(state, action) {
      state.InfoPartnership.numberPhone = action.payload;
    },
    updateEmail(state, action) {
      state.InfoPartnership.email = action.payload;
    },
    updateCountry(state, action) {
      state.InfoPartnership.country = action.payload;
    },
    updateRegion(state, action) {
      state.InfoPartnership.region = action.payload;
    },
    updateCity(state, action) {
      state.InfoPartnership.city = action.payload;
    },
    updateField(state, action) {
      state.InfoPartnership.field = action.payload;
    },
    updateLink(state, action) {
      state.InfoPartnership.link = action.payload;
    },
    updateMessage(state, action) {
      state.InfoPartnership.message = action.payload;
    },
  },
});

export const {
  updateFullName,
  updateNumberPhone,
  updateEmail,
  updateCountry,
  updateRegion,
  updateCity,
  updateField,
  updateLink,
  updateMessage,
} = partnershipSlice.actions;

export default partnershipSlice.reducer;
