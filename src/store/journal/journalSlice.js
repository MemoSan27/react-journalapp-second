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
        },
        setNotes: (currentValue, action) => {
            currentValue.notes = action.payload;
        },
        setSaving: (currentValue) => {

        },
        updateNote: (currentValue, action) => {
        
        },
        deleteNoteById: (currentValue, action) => {
        
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
    updateNote,
    deleteNoteById 
} = journalSlice.actions;
