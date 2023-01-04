
export const selectAllContatcs = state => state.contacts.contactItems;

export const getContacts = state => state.contacts.contactItems;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const selectFilter = state => state.filter.value;
export const getFilter = state => state.filter.filter;