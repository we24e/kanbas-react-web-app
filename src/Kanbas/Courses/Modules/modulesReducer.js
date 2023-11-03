import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  modules: db.modules,
  module: { name: "New Module 123", description: "New Description" },
  editingModule: null,
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action) => {
      state.modules = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.modules,
      ];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    startEditingModule: (state, action) => {
      state.editingModule = action.payload;
      state.module = action.payload ? { ...action.payload } : initialState.module;
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) =>
        module._id === action.payload._id ? action.payload : module
      );
      state.module = initialState.module;
      state.editingModule = null;
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});

export const {
  addModule,
  deleteModule,
  startEditingModule,
  updateModule,
  setModule,
} = modulesSlice.actions;

export default modulesSlice.reducer;
