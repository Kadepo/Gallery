import {combineReducers} from "redux";
import {imageReducer} from "./reducers";
import {appReducer} from "./reducers/appReducer";


export const rootReducer = combineReducers({
    images: imageReducer,
    app: appReducer
})
export type RootState = ReturnType<typeof rootReducer>
