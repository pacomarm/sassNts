import { finishLoading, removeError, setError, startLoading } from "../../actions/ui"
import { types } from "../../types/types";

describe('tests in UI actions', () => {
    
    test('all actions should work', () => {
        const action = setError('Hello');
        expect(action).toEqual({
            type: types.uiSetError,
            payload: 'Hello'
        })

        const removeErroraction = removeError();
        expect(removeErroraction).toEqual({
            type: types.uiRemoveError,
        })

        const startLoadingaction = startLoading();
        expect(startLoadingaction).toEqual({
            type: types.uiStartLoading,
        })
        const finishLoadingaction = finishLoading();
        expect(finishLoadingaction).toEqual({
            type: types.uiFinishLoading,
        })
    })

    test('all actions should work', () => {
        const action = setError('Hello');
        expect(action).toEqual({
            type: types.uiSetError,
            payload: 'Hello'
        })
    })
    

})
