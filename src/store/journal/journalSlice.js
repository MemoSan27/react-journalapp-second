import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        
        /* active: {
            id: 'ABC',
            title: '',
            body: '',
            date: 1234567,
            imageUrls: [],
        }, */
    },
    reducers: {
        savingNewNote: (currentValue) => {
            currentValue.isSaving = true;
        },
        addNewEmptyNote: (currentValue, action) => {
            currentValue.notes.push( action.payload );
            currentValue.isSaving = false;

        },
        setActiveNote: (currentValue, action) => {
            currentValue.active = action.payload;
            currentValue.messageSaved = '';
        },
        setNotes: (currentValue, action) => {
            currentValue.notes = action.payload;
        },
        setSaving: (currentValue) => {
            currentValue.isSaving = true;
            currentValue.messageSaved = '';
            //TODO: mensaje de error
        },
        noteUpdated: (currentValue, action) => {
            currentValue.isSaving = false;
            currentValue.notes = currentValue.notes.map(note => {
                if(note.id === action.payload.id){
                    return action.payload;
                }

                return note;
                
            });

            currentValue.messageSaved = `${ action.payload.title }, actualizada correctamente`;
        },
        setPhotosToActiveNote: (currentValue, action) => {
            currentValue.active.imageUrls = [ ...currentValue.active.imageUrls, ...action.payload ];
            currentValue.isSaving = false;
        },
        clearNotesLogout: (currentValue, action) => {
            currentValue.isSaving = false;
            currentValue.messageSaved = '';
            currentValue.notes = [];
            currentValue.active = null;
        },

        deleteNoteById: (currentValue, action) => {
            currentValue.active = null;
            currentValue.notes = currentValue.notes.filter(note => note.id !== action.payload);
        },

    }
});


// Action creators are generated for each case reducer function
export const { 
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    noteUpdated,
    setPhotosToActiveNote,
    clearNotesLogout,
    deleteNoteById 
} = journalSlice.actions;
