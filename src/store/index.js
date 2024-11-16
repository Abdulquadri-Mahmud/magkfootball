import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userReducers from './user/userReducer';
import cartsReducer from './cart/cartReducer';
import Wishlists from './wishlist/wishlist';
import adminReducer from './adminReducer/adminReducer';

const rootReducer = combineReducers({
    user: userReducers,
    cart: cartsReducer,
    wishlist : Wishlists,
    admin: adminReducer
});

const persistConfig = {
    key : 'root',
    storage,
    version: 1
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false,
    })
});

export const persistor = persistStore(store);