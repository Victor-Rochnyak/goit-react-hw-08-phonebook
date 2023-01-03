import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
   
    },
  },
});

// export const getContacts = state => state.contacts.contactItems;




export const { filterContact } = filterSlice.actions;

export const filterReduser = filterSlice.reducer;
