import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import spainReducer from "./lenguage/lenguageSlice";

const reducers = combineReducers({
    spain: spainReducer,
});

const persistConfig = {
    key:'portafolio',
    storage,
}

const persistedReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducers,
});

export const persisted = persistStore(store);