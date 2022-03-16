import {CREATE_FAVORITE, DELETE_FAVORITE, DELETE_IMAGE, FETCH_IMAGES} from "../types";
import {PayloadAction} from "@reduxjs/toolkit";

interface ISrc {
    small: string,
    original: string,
    landscape: string,
    large: string,
    large2x: string,
    medium: string,
    portrait: string,
    tiny: string
}

export interface IImages {
    src: ISrc,
    id: number,
    width: number,
    height: number,
}

export interface IImagesState {
    images: IImages[],
    favoriteImages: IImages[]
}


const initialState: IImagesState = {
    images: [],
    favoriteImages: []
}

export const imageReducer = (state = initialState, action: PayloadAction<any>) => {
    console.log(action)
    switch (action.type) {
        case FETCH_IMAGES:
            return {...state, images: action.payload}
        case DELETE_IMAGE:
            return {...state, images: state.images.filter(i => i.id !== action.payload.id)}
        case CREATE_FAVORITE:
            return {...state, favoriteImages: [...state.favoriteImages, action.payload]}
        case DELETE_FAVORITE:
            return {...state, favoriteImages: state.favoriteImages.filter(i => i.id !== action.payload.id)}
        default: return state
    }
}