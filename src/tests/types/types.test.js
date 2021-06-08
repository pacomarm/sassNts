import { types } from "../../types/types"

describe('tests of types', () => {
    

    test('should have the types', () => {

        expect( types ).toEqual( {
    login: '[Auth] Login',
    logout: '[Auth] Logout',

    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',

    uiStartLoading: '[UI] Start Error',
    uiFinishLoading: '[UI] Finish Error',

    notesAddNew: '[Notes] New note',
    notesActive: '[Notes] Set active note',
    notesLoad: '[Notes] Load notes',
    notesUpdated: '[Notes] Update note',
    notesFileUrl: '[Notes] Update image url',
    notesDelete: '[Notes] Delete note',
    notesLogoutCleaning: '[Notes] Logout Cleaning',
});
        
    })
    

})
