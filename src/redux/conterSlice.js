import { createSlice } from '@reduxjs/toolkit';
let settings = { darkMode: true, color: 180, language: "en" };
let existedElements = ["water", "soil", "air", "fire"];
let mixingElements = [];
if (localStorage.getItem('existedElements')) {
  let item = localStorage.getItem('existedElements');
  existedElements = JSON.parse(item);
}
if (localStorage.getItem('settings')) {
  let item = localStorage.getItem('settings');
  settings = JSON.parse(item);
}

const setItem = (name, donne) => {
  let item = JSON.stringify(donne);
  localStorage.setItem(name, item);
}

export const counterSlice = createSlice(
  {
    name: 'alchemy',
    initialState: {
      mixingElements: mixingElements,
      existedElements: existedElements,
      settings: settings,
    },
    reducers: {
      changeSettings: (state, action) => {
        switch (action.payload.type) {
          case "color":
            state.settings.color = action.payload.value;
            break;

          case "darkMode":
            state.settings.darkMode = !state.settings.darkMode;
            break;

          case "language":
            state.settings.language = action.payload.value;
            break;
          default:
            console.log('error in settings');
        }
        setItem('settings', state.settings);
      },
      editMixingElements: (state, action) => {

        switch (action.payload.type) {
          case "push":
            if (state.mixingElements.length < 3) {
              state.mixingElements.push(action.payload.id)
            }
            break;
          case "pop":
            state.mixingElements.splice(state.mixingElements.indexOf(action.payload.id), 1);
            break;
          default:
            console.log('error in mixing elements')
            break;
        }
        
      },
      putExistedElements: (state,action)=>{
        if(!state.existedElements.includes(action.payload) && action.payload !== undefined){
         state.existedElements.push(action.payload);
         state.mixingElements=[];
        }
      },
    },
  }
);

export const { changeSettings, editMixingElements,putExistedElements } = counterSlice.actions;

export default counterSlice.reducer;
