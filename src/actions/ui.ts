import { types } from '../types/types';

export const setError = (err: any) => ({
    type: types.uiSetError,
    payload: err
});

export const removeError = () => ({
    type: types.uiRemoveError
});