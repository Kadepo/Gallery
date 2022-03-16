import {takeEvery, put, call} from 'redux-saga/effects'
import {FETCH_IMAGES, REQUEST_IMAGES} from "../types";
import {hideLoader, showLoader} from "../actions";


export function* sagaWatcher() {
    yield takeEvery(REQUEST_IMAGES, sagaWorker)
}

function* sagaWorker(): any {
    yield put(showLoader())
    const payload = yield call(fetchImages)
    yield put({type: FETCH_IMAGES, payload})
    yield put(hideLoader())
}

async function fetchImages() {
    const response = await fetch('https://api.pexels.com/v1/curated?per_page=80', {
                headers: {
                    Authorization: '563492ad6f91700001000001226a2b4ab8a04bf2a7e8b29a360f678d'
                }
            })
    const json = await response.json()
    return json.photos
}