import { createStore } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

import toggleFavorite from './reducers/favoriteReducer.js';

const persistConfig = {
    key: "root",
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, toggleFavorite);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };