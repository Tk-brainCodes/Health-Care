import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//reducer imports
import authReducer from "./auth/auth.reducer";

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["isSigningIn", "errorMessage"],
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;

// export default rootReducer;
