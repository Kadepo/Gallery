import {
    HIDE_LOADER,
    SHOW_LOADER,
    REQUEST_IMAGES,
    CREATE_FAVORITE,
    DELETE_FAVORITE,
    DELETE_IMAGE
} from "./types";
import {IImages} from "./reducers";

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function fetchImage() {
    return {
        type: REQUEST_IMAGES
    }
}

export function createFavorite(image: IImages) {
    return {
        type: CREATE_FAVORITE,
        payload: image
    }
}

export function deleteFavorite(image: IImages) {
    return {
        type: DELETE_FAVORITE,
        payload: image
    }
}
export function deleteImage(image: IImages) {
    return {
        type: DELETE_IMAGE,
        payload: image
    }
}