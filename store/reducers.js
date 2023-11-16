import { createSlice } from '@reduxjs/toolkit';

const projectPopin = createSlice({
    name: 'projectPopin',
    initialState: {
        projectSelected: '',
        openPopin: false
    },
    reducers: {
        setProjectSelected: (state, action) => {
            state.projectSelected = action.payload;
        },
        setOpenPopin: (state, action) => {
            state.openPopin = action.payload
        } 
    }
});

const { actions, reducer } = projectPopin

export const { setProjectSelected, setOpenPopin } = actions;

export default reducer