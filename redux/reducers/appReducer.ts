import {HIDE_LOADER, SHOW_LOADER} from "../types";
import {PayloadAction} from "@reduxjs/toolkit";

export interface ILoading {
    loading: boolean
}

const initialState: ILoading = {
    loading: false
}

export const appReducer = (state = initialState, action: PayloadAction<boolean>) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        default: return state
    }
}