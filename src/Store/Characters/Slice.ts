import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  characters:[],
  character_detail: {},
  info:[]
};

const CharacterSlice = createSlice({
  name:"Characters",
  initialState,
  reducers : {
    getCharacters(state) {},
    setCharacters(state, {payload}: PayloadAction<any>){
      state.characters = payload?.results;
      state.info = payload?.info;
    },
    setCharacterDetail(state,{payload}:PayloadAction<any>){
      state.character_detail = payload;
    }
  }
});

export const CharacterActions = CharacterSlice.actions;

export default CharacterSlice.reducer;
