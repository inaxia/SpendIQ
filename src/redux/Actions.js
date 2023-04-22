import actionTypes from './ActionTypes';

export const updateBarLoading = (data) => {
    return {
        type: actionTypes.BAR_LOADING,
        payload: data,
    }
}

export const updatePageLoading = (data) => {
    return {
        type: actionTypes.PAGE_LOADING,
        payload: data,
    }
}