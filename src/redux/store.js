import { configureStore} from '@reduxjs/toolkit';
import { contactsReduser } from './contacts/contactSlise';
import { authReducer } from './auth/slice';
import { filterReduser } from './contacts/filterSlise';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const rootRedusers = combineReducers({
//   contacts: contactsReduser,
//   filter: filterReduser,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter'],
// };

// const persistRedusers = persistReducer(persistConfig, rootRedusers);

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReduser,
    filter: filterReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
